import Spinner from "@modules/common/icons/spinner"
import clsx from "clsx"
import React from "react"

type ButtonProps = {
  isLoading?: boolean
  variant?: "primary" | "secondary"
  loadingText?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  className,
  isLoading = false,
  variant = "primary",
  loadingText,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "flex min-h-[50px] w-full items-center justify-center rounded-xl border px-5 py-[10px] font-btn font-medium text-white transition-colors duration-200 disabled:bg-textLight disabled:opacity-50",
        {
          "border-brown bg-brown hover:shadow-md": variant === "primary",
          "border-gray-920 bg-text hover:shadow-md": variant === "secondary"
        },
        className
      )}
    >
      {isLoading ? loadingText ? loadingText : <Spinner /> : children}
    </button>
  )
}

export default Button
