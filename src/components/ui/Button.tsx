import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonElementProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: never;
  };

type AnchorElementProps = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonElementProps | AnchorElementProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-sm hover:bg-primary-hover hover:shadow-md hover:-translate-y-0.5",
  secondary:
    "border border-secondary bg-transparent text-secondary " +
    "shadow-sm " +
    "hover:bg-primary hover:text-secondary-foreground " +
    "hover:-translate-y-0.5",
  outline:
    "border border-primary text-primary hover:bg-primary-soft hover:-translate-y-0.5",
  ghost:
    "text-foreground hover:bg-surface-hover",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-11 px-5 py-2.5 text-sm",
  lg: "min-h-12 px-6 py-3 text-base",
};

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    fullWidth = false,
    size = "md",
    variant = "primary",
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold",
    "transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out",
    "active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
    "focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );

  if (typeof props.href === "string") {
    const {
      href,
      children: _children,
      className: _className,
      fullWidth: _fullWidth,
      size: _size,
      variant: _variant,
      ...anchorProps
    } = props as AnchorElementProps;

    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const {
    children: _children,
    className: _className,
    fullWidth: _fullWidth,
    size: _size,
    variant: _variant,
    ...buttonProps
  } = props as ButtonElementProps;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}