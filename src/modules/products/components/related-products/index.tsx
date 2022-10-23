import { fetchProductsList } from "@lib/data"
import usePreviews from "@lib/hooks/use-previews"
import getNumberOfSkeletons from "@lib/util/get-number-of-skeletons"
import repeat from "@lib/util/repeat"
import { Product, StoreGetProductsParams } from "@medusajs/medusa"
import Button from "@modules/common/components/button"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { useCart } from "medusa-react"
import { useMemo } from "react"
import { useInfiniteQuery } from "react-query"
import ProductPreview from "../product-preview"

type RelatedProductsProps = {
  product: Product
}

const RelatedProducts = ({ product }: RelatedProductsProps) => {
  const { cart } = useCart()

  const queryParams: StoreGetProductsParams = useMemo(() => {
    const params: StoreGetProductsParams = {}

    if (cart?.id) {
      params.cart_id = cart.id
    }

    if (product.collection_id) {
      params.collection_id = [product.collection_id]
    }

    if (product.type) {
      params.type = product.type.id
    }

    if (product.tags) {
      params.tags = product.tags.map((t) => t.value)
    }

    params.is_giftcard = false

    return params
  }, [product, cart?.id])

  const { data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery(
      [`infinite-products-${product.id}`, queryParams, cart],
      ({ pageParam }) => fetchProductsList({ pageParam, queryParams }),
      {
        getNextPageParam: (lastPage) => lastPage.nextPage
      }
    )

  const previews = usePreviews({ pages: data?.pages, region: cart?.region })

  return (
    <div className="product-page-constraint">
      <div className="mb-16 flex flex-col items-center text-center">
        <span className="text-base-regular mb-6 text-gray-600">
          Related products
        </span>
        <p className="text-2xl-regular max-w-lg text-text">
          You might also want to check out these products.
        </p>
      </div>

      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 small:grid-cols-3 medium:grid-cols-4">
        {previews.map((p) => (
          <li key={p.id}>
            <ProductPreview {...p} />
          </li>
        ))}
        {isLoading &&
          !previews.length &&
          repeat(8).map((index) => (
            <li key={index}>
              <SkeletonProductPreview />
            </li>
          ))}
        {isFetchingNextPage &&
          repeat(getNumberOfSkeletons(data?.pages)).map((index) => (
            <li key={index}>
              <SkeletonProductPreview />
            </li>
          ))}
      </ul>
      {hasNextPage && (
        <div className="mt-8 flex items-center justify-center">
          <Button
            isLoading={isLoading}
            onClick={() => fetchNextPage()}
            className="w-72"
          >
            Load more
          </Button>
        </div>
      )}
    </div>
  )
}

export default RelatedProducts
