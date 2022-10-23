import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
}: ProductPreviewType) => {
  return (
    <Link href={`/products/${handle}`}>
      <a>
        <div className="overflow-hidden rounded-md border-textBtn bg-[rgba(255,255,255,0.4)]">
          <Thumbnail thumbnail={thumbnail} size="full" />
          <div className="text-lg-regular m-2 p-3">
            <span>{title}</span>
            <div className="mt-1 flex items-center gap-x-2 font-serif text-xl font-semibold text-brown">
              {price ? (
                <>
                  {price.price_type === "sale" && (
                    <span className="text-gray-500 line-through">
                      {price.original_price}
                    </span>
                  )}
                  <span
                    className={clsx("font-semibold", {
                      "text-rose-500": price.price_type === "sale",
                    })}
                  >
                    {price.calculated_price}
                  </span>
                </>
              ) : (
                <div className="h-6 w-20 animate-pulse bg-gray-100"></div>
              )}
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProductPreview
