import React from "react"
import { IconProps } from "types/icon"

const LogoIcon: React.FC<IconProps> = ({
  size = "24",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <g clipPath="url(#clip0_117_21)">
        <path
          d="M202.981 393.128L174.974 465.671M303.502 395.782L335.63 466.037M253.917 393.128L253.917 512M249.157 20.1465C245.311 50.1437 183.628 58.5321 144.023 119.319C104.418 180.105 97.7649 331.958 108.732 354.239C119.698 376.52 393.14 383.367 400.814 354.239C408.487 325.111 419.019 181.593 366.925 110.919C314.83 40.2451 268.68 43.6796 265.846 20.1465C263.012 -3.3866 253.004 -9.85067 249.157 20.1465Z"
          stroke={color}
          strokeWidth="20"
        />
      </g>

      <defs>
        <clipPath id="clip0_117_21">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default LogoIcon
