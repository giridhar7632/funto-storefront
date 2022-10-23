import clsx from "clsx"
import React from "react"

type HamburgerProps = {
  setOpen: () => void
}

const Hamburger: React.FC<HamburgerProps> = ({ setOpen }) => {
  return (
    <button className="relative h-10 w-10 focus:outline-none" onClick={setOpen}>
      <span className="sr-only">Open main menu</span>
      <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2  -translate-y-1/2 transform">
        <span
          aria-hidden="true"
          className={clsx(
            "absolute block h-0.5 w-5 -translate-y-1.5 rounded-sm bg-current "
          )}
        ></span>
        <span
          aria-hidden="true"
          className={clsx(
            "absolute block  h-0.5 w-5 transform rounded-sm bg-current"
          )}
        ></span>
        <span
          aria-hidden="true"
          className={clsx(
            "absolute block  h-0.5 w-5 translate-y-1.5 rounded-sm bg-current"
          )}
        ></span>
      </div>
    </button>
  )
}

export default Hamburger
