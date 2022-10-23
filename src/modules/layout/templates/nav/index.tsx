import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import Logo from "@modules/layout/components/logo"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Nav = () => {
  const { pathname } = useRouter()
  const [isHome, setIsHome] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll", detectScrollY)

      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const { toggle } = useMobileMenu()

  return (
    <div
      className={clsx("group sticky inset-x-0 top-0 z-50", {
        "!fixed": isHome,
      })}
    >
      <header
        className={clsx(
          "relative mx-auto h-16 border-b border-transparent bg-transparent px-8 transition-colors duration-200 group-hover:border-gray-200 group-hover:bg-white",
          {
            "!border-gray-200 !bg-white": !isHome || isScrolled,
          }
        )}
      >
        <nav
          className={clsx(
            "text-small-regular flex h-full w-full items-center justify-between text-gray-900 transition-colors duration-200",
            {
              "text-white group-hover:text-gray-900": isHome && !isScrolled,
            }
          )}
        >
          <div className="flex h-full flex-1 basis-0 items-center">
            <Link href="/">
              <a>
                <Logo
                  className={clsx("", {
                    "text-brown": isScrolled,
                  })}
                  label="Funto"
                />
              </a>
            </Link>
          </div>

          <div className="flex h-full flex-1 basis-0 items-center justify-end gap-x-6">
            <div className="block small:hidden">
              <Hamburger setOpen={toggle} />
            </div>
            <div className="hidden h-full small:block">
              <DropdownMenu />
            </div>

            <CartDropdown />

            <div className="hidden h-full items-center gap-x-6 small:flex">
              {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
              <Link href="/account">
                <a>Account</a>
              </Link>
            </div>
          </div>

          {/* <div className="flex items-center h-full">
            
          </div> */}
        </nav>
        <MobileMenu />
      </header>
    </div>
  )
}

export default Nav
