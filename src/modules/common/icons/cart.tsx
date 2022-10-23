import React from "react"
import { IconProps } from "types/icon"

const Cart: React.FC<IconProps> = ({
  size = "36",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M22.4418 28.4289C22.4418 30.0816 23.7816 31.4214 25.4343 31.4214C27.087 31.4214 28.4268 30.0816 28.4268 28.4289C28.4268 26.7762 27.087 25.4364 25.4343 25.4364H11.0213C10.2767 25.4364 9.64543 24.8889 9.54013 24.1518M26.9305 20.9477H9.0824L6.73115 4.48892H2.99052M13.4643 7.48142H31.4193L28.4268 16.4589M16.4568 28.4289C16.4568 30.0816 15.117 31.4214 13.4643 31.4214C11.8116 31.4214 10.4718 30.0816 10.4718 28.4289C10.4718 26.7762 11.8116 25.4364 13.4643 25.4364C15.117 25.4364 16.4568 26.7762 16.4568 28.4289Z"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Cart
