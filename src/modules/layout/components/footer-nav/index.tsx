import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"
import Logo from "../logo"

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-col items-start justify-between gap-y-6 xsmall:flex-row">
        <div>
          <Link href="/">
            <a>
              <Logo label="Funto" />
            </a>
          </Link>
        </div>
        <div className="text-base-regular grid grid-cols-2 gap-x-16">
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Collections</span>
            <ul
              className={clsx("grid grid-cols-1 gap-y-2", {
                "grid-cols-2": (collections?.length || 0) > 4
              })}
            >
              {collections?.map((c) => (
                <li key={c.id}>
                  <Link href={`/collections/${c.id}`}>
                    <a>{c.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Socials</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a
                  href="https://instagram.com/mr_talla7632"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/@giridhar_talla"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/giridhar7632/funto-storefront"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse items-end justify-center gap-y-4 xsmall:flex-row xsmall:items-center xsmall:justify-between">
        <span className="text-xsmall-regular text-textLight">
          © Copyright 2022 Funto
        </span>
        <div className="flex min-w-[316px] xsmall:justify-end">
          <CountrySelect />
        </div>
      </div>
    </div>
  )
}

export default FooterNav
