import LogoIcon from "@modules/common/icons/logo"
import React from "react"

const Logo: React.FC<{ label: string; className?: string }> = ({
  label,
  className,
  children,
}) => {
  return (
    <div>
      <div className="flex gap-x-1 text-text">
        <LogoIcon size={36} />
        <p className="text-xl-semi camelcase font-serif font-semibold">
          {label}
        </p>
        {children}
      </div>
    </div>
  )
}

export default Logo
