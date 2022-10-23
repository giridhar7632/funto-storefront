import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="relative h-[100vh] w-full">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-[20px] text-white 2xsmall:top-[25%] md:top-0 md:px-12 small:items-start small:justify-end small:p-32 small:text-left">
        <h1 className="w-full font-serif text-6xl font-semibold text-text shadow-textLight drop-shadow-md xsmall:mb-1 md:text-left md:text-8xl small:text-left small:text-7xl large:mb-4 large:text-left large:text-9xl large:font-bold">
          Elegant
        </h1>
        <h1 className="w-full font-serif text-6xl font-semibold text-text shadow-textLight drop-shadow-md xsmall:mb-1 md:text-center md:text-8xl small:text-left small:text-7xl large:mb-4 large:text-left large:text-9xl large:font-bold">
          Simple
        </h1>
        <h1 className="w-full font-serif text-6xl font-semibold text-text shadow-textLight drop-shadow-md xsmall:mb-1 md:text-right md:text-8xl small:text-left small:text-7xl large:mb-4 large:text-left large:text-9xl large:font-bold">
          Furnitures.
        </h1>

        <p className="text-xl-regular mb-6 max-w-[32rem] text-textLight shadow-black drop-shadow-md">
          Affordable home furniture designs & ideas.
        </p>
        <div className="flex items-start">
          <svg
            width="127"
            height="94"
            viewBox="0 0 127 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-17 -translate-y-6"
          >
            <path
              d="M62.3354 13.3876C21.2311 13.3876 8.04577 25.6407 8.04577 36.2757C8.04577 46.9107 34.2187 80.3251 106.636 83.7533"
              stroke="#62442B"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M96.493 74.8381C96.493 74.8381 110.835 85.0368 111.376 83.2644C111.918 81.4921 95.6683 89.912 95.6683 89.912"
              stroke="#62442B"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <Link href="/store">
            <a className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-brown p-3 font-btn text-xl font-medium text-textBtn hover:shadow-md">
              Explore
            </a>
          </Link>
        </div>
      </div>
      <div className="relative float-right h-[45vh] w-full md:h-[45vh] small:h-full small:w-[32vw]">
        <Image
          src="/edited-banner.png"
          layout="fill"
          loading="eager"
          priority={true}
          quality={90}
          objectFit="cover"
          objectPosition={"bottom"}
          alt="Elegant and Royal lamps"
          className="absolute inset-0"
          draggable="false"
        />
      </div>
    </div>
  )
}

export default Hero
