import { ProductProvider } from "@lib/context/product-context"
import { useIntersection } from "@lib/hooks/use-in-view"
import { Product } from "@medusajs/medusa"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import React, { useRef } from "react"
import ImageGallery from "../components/image-gallary"
import MobileActions from "../components/mobile-actions"

type ProductTemplateProps = {
  product: Product
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {
  const info = useRef<HTMLDivElement>(null)

  const inView = useIntersection(info, "0px")

  return (
    <ProductProvider product={product}>
      <div className="content-container relative flex flex-col py-6 small:flex-row small:items-start">
        <div className="flex w-full flex-col gap-y-8">
          <ImageGallery images={product.images} />
        </div>
        <div
          className="flex w-full flex-col gap-y-12 py-8 small:sticky small:top-20 small:max-w-[344px] small:py-0 medium:max-w-[400px]"
          ref={info}
        >
          <ProductInfo product={product} />
          <ProductTabs product={product} />
        </div>
      </div>
      <div className="content-container my-16 px-6 small:my-32 small:px-8">
        <RelatedProducts product={product} />
      </div>
      <MobileActions product={product} show={!inView} />
    </ProductProvider>
  )
}

export default ProductTemplate
