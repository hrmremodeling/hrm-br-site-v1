import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary";
};

export function Button({ className = "", variant = "default", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const styles =
    variant === "secondary"
      ? "bg-transparent text-current"
      : "bg-neutral-900 text-white hover:bg-neutral-800";

  return <button className={`${base} ${styles} ${className}`.trim()} {...props} />;
}
