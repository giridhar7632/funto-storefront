import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const FooterCTA = () => {
  return (
    <div className="relative mx-2 flex max-w-[1180px] flex-col items-center justify-between rounded-xl bg-text bg-opacity-60 text-white xsmall:flex-row small:mx-auto">
      <div className="relative aspect-square w-full small:w-[25%]">
        <Image
          src="/banner-sofa.png"
          alt=""
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>

      <div className="content-container relative flex flex-col-reverse justify-between gap-y-8 py-16 small:flex-row small:items-center">
        <div>
          <p className="font-btn text-sm">UPTO 75% DISCOUNT</p>
          <h3 className="text-2xl-semi font-serif">Shop the latest models</h3>
          <p className="font-btn text-sm">{`Start's MIDNIGHT EVERYDAY`}</p>
          <div className="mt-2">
            <UnderlineLink href="/store">Explore products</UnderlineLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterCTA
