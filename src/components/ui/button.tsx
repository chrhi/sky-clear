import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary hover:bg-brand-emphasis focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset focus-visible:ring-brand-default text-brand disabled:bg-brand-subtle disabled:text-brand-subtle disabled:opacity-40 disabled:hover:bg-brand-subtle disabled:hover:text-brand-default disabled:hover:opacity-40",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        primary: `
          bg-[#e83e8c] text-white border border-[#e83e8c]
          hover:bg-[#d7327c] hover:border-[#d7327c]
          focus-visible:ring-2 focus-visible:ring-[#e83e8c]/50
          active:bg-[#b22863] active:border-[#a6245a]
          disabled:bg-[#e83e8c]/50 disabled:border-[#e83e8c]/50
        `,
        goat: `
          bg-[#4caf50] text-white border border-[#4caf50]
          hover:bg-[#43a047] hover:border-[#43a047]
          focus-visible:ring-2 focus-visible:ring-[#4caf50]/50
          active:bg-[#388e3c] active:border-[#388e3c]
          disabled:bg-[#4caf50]/50 disabled:border-[#4caf50]/50
        `,
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
