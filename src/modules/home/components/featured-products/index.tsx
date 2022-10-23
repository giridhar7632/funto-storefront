import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div className="py-12">
      <div className="content-container py-12">
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="text-base-regular mb-6 text-textLight">
            New Arrivals
          </span>
          <p className="text-2xl-regular mb-4 max-w-lg text-text">
            Explore our newest styles are here to help you look your best.
          </p>
          <UnderlineLink href="/store">Go to Store</UnderlineLink>
        </div>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 small:grid-cols-4">
          {data
            ? data.map((product) => (
                <li key={product.id}>
                  <ProductPreview {...product} />
                </li>
              ))
            : Array.from(Array(4).keys()).map((i) => (
                <li key={i}>
                  <SkeletonProductPreview />
                </li>
              ))}
        </ul>
      </div>
    </div>
  )
}

export default FeaturedProducts
