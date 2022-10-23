import ArrowRight from "@modules/common/icons/arrow-right"
import Link from "next/link"

type UnderlineLinkProps = {
  href: string
  children?: React.ReactNode
}

const UnderlineLink = ({ href, children }: UnderlineLinkProps) => {
  return (
    <div className="flex items-start font-sans">
      <Link href={href}>
        <a className="text-large-regular group flex items-center gap-x-4 border-b border-current py-2 transition-all duration-300 hover:pl-4 hover:pr-1">
          <span>{children}</span>
          <ArrowRight
            size={20}
            className="transition-all duration-300 group-hover:ml-2"
          />
        </a>
      </Link>
    </div>
  )
}

export default UnderlineLink
