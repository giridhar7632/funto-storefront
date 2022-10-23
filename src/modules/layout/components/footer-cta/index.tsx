import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const FooterCTA = () => {
  return (
    <div className="w-full bg-amber-100">
      <div className="content-container relative flex flex-col-reverse justify-between gap-y-8 py-16 small:flex-row small:items-center">
        <div>
          <h3 className="text-2xl-semi">Shop the latest styles</h3>
          <div className="mt-6">
            <UnderlineLink href="/store">Explore products</UnderlineLink>
          </div>
        </div>

        <div className="relative aspect-square w-full small:aspect-[28/36] small:w-[35%]">
          <Image
            src="/cta_three.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
      </div>
    </div>
  )
}

export default FooterCTA
