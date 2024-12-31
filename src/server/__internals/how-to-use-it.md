# ServerAction Class

A utility class for handling server-side actions in Next.js applications with built-in authentication, error handling, and input validation.

## Features

- Server-side execution protection
- Authentication handling using Clerk
- Error tracking with Sentry
- Input validation using Zod
- Separate flows for authenticated and public actions

## Installation

Ensure you have the required dependencies:

```bash
npm install @clerk/nextjs @sentry/nextjs zod
```

## Basic Usage

```typescript
import { ServerAction } from "./ServerAction";
import { z } from "zod";

// Create an instance
const serverAction = new ServerAction();

// Example protected action
async function createPost() {
  return serverAction.protectedAction(async () => {
    // Your authenticated logic here
    return {
      success: true,
      data: { id: 1, title: "New Post" },
    };
  }, "createPost");
}

// Example public action
async function getPublicPosts() {
  return serverAction.publicAction(async () => {
    // Your public logic here
    return {
      success: true,
      data: [{ id: 1, title: "Public Post" }],
    };
  }, "getPublicPosts");
}

// Example input validation
const postSchema = z.object({
  title: z.string().min(3),
  content: z.string(),
});

function validatePost(data: unknown) {
  return serverAction.validateInput(postSchema, data, "postValidation");
}
```

## API Reference

### `protectedAction<T>(action: () => Promise<ActionResponse<T>>, context?: string)`

Executes an authenticated action. Will fail if no user is logged in.

```typescript
const result = await serverAction.protectedAction(async () => {
  // Only runs if user is authenticated
  return {
    success: true,
    data: { message: "Protected data" },
  };
}, "contextName");
```

### `publicAction<T>(action: () => Promise<ActionResponse<T>>, context?: string)`

Executes an action that doesn't require authentication.

```typescript
const result = await serverAction.publicAction(async () => {
  return {
    success: true,
    data: { message: "Public data" },
  };
}, "contextName");
```

### `validateInput<T>(schema: ZodType, data: unknown, context?: string)`

Validates input data against a Zod schema.

```typescript
const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18),
});

const result = serverAction.validateInput(schema, userData, "userValidation");
```

## Error Handling

The class automatically handles errors and reports them to Sentry with:

- Error context
- User ID (if available)
- Stack traces
- Custom context messages

## Response Format

All actions return an `ActionResponse<T>` with the following structure:

```typescript
{
  success: boolean;
  message?: string;
  data?: T;
}
```

## Important Notes

1. This class can only be instantiated on the server side
2. User authentication state is automatically handled
3. Sentry context is automatically cleaned up after each action
4. All errors are logged and tracked in Sentry

## Best Practices

1. Always provide a context string for better error tracking
2. Use type parameters for better TypeScript inference
3. Validate inputs before processing
4. Handle both success and error cases in your client code
