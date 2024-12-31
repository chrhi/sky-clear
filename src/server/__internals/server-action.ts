import { ActionResponse } from "@/types";
import { currentUser } from "@clerk/nextjs/server";
import { z } from "zod";
import * as Sentry from "@sentry/nextjs";

type ActionFunction<T> = () => Promise<ActionResponse<T>>;

export class ServerAction {
  public user: Awaited<ReturnType<typeof currentUser>> | null = null;

  constructor() {
    if (typeof window !== "undefined") {
      throw new Error("ServerAction can only be instantiated on the server");
    }
  }

  private async initializeUser(): Promise<void> {
    this.user = await currentUser();
  }

  private handleError(
    error: unknown,
    context?: string
  ): ActionResponse<string> {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    Sentry.captureException(error, {
      extra: {
        context,
        userId: this.user?.id,
      },
    });

    console.error(
      `Server action error${context ? ` in ${context}` : ""}:`,
      error
    );

    return {
      success: false,
      message: "Operation failed",
      data: errorMessage,
    };
  }

  /**
   * Execute a protected action that requires authentication
   */
  public async protectedAction<T>(
    action: ActionFunction<T>,
    context?: string
  ): Promise<ActionResponse<T>> {
    try {
      await this.initializeUser();

      if (!this.user) {
        return {
          success: false,
          message: "Authentication required",
        };
      }

      Sentry.setUser({ id: this.user.id });
      return action();
    } catch (error) {
      return this.handleError(error, context) as ActionResponse<T>;
    } finally {
      Sentry.setUser(null);
    }
  }

  /**
   * Execute a public action that doesn't require authentication
   */
  public async publicAction<T>(
    action: ActionFunction<T>,
    context?: string
  ): Promise<ActionResponse<T>> {
    try {
      await this.initializeUser();

      if (this.user) {
        Sentry.setUser({ id: this.user.id });
      }

      return action();
    } catch (error) {
      return this.handleError(error, context) as ActionResponse<T>;
    } finally {
      Sentry.setUser(null);
    }
  }

  /**
   * Validate input data against a schema
   */
  public validateInput<T extends z.ZodType>(
    schema: T,
    data: unknown,
    context?: string
  ): ActionResponse<z.infer<T>> | z.infer<T> {
    try {
      const result = schema.safeParse(data);

      if (!result.success) {
        Sentry.captureMessage("Validation Error", {
          level: "warning",
          extra: {
            context,
            errors: result.error.flatten(),
            userId: this.user?.id,
          },
        });

        return {
          success: false,
          message: "Validation failed",
          data: result.error.flatten(),
        };
      }

      return result.data;
    } catch (error) {
      return this.handleError(error, `validation:${context}`) as ActionResponse<
        z.infer<T>
      >;
    }
  }
}
