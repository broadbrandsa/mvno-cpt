import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-mint-500 text-bg hover:bg-mint-400 focus-visible:ring-mint-400/60 shadow-[0_8px_24px_-8px_rgba(16,185,129,0.6)]",
  secondary:
    "bg-white/[0.08] text-fg ring-1 ring-inset ring-white/12 hover:bg-white/[0.14] hover:ring-white/20 focus-visible:ring-white/40",
  ghost:
    "bg-transparent text-fg-muted hover:text-fg hover:bg-white/[0.04] focus-visible:ring-white/20",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-semibold",
          "transition-colors duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
