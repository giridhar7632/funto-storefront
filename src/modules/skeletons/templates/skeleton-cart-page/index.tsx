import repeat from "@lib/util/repeat"
import SkeletonCartItem from "@modules/skeletons/components/skeleton-cart-item"
import SkeletonCodeForm from "@modules/skeletons/components/skeleton-code-form"
import SkeletonOrderSummary from "@modules/skeletons/components/skeleton-order-summary"

const SkeletonCartPage = () => {
  return (
    <div className="content-container">
      <div className="grid grid-cols-1 gap-x-8 py-12 small:grid-cols-[1fr_360px]">
        <div>
          <div className="flex items-center justify-between rounded border-b border-gray-200 pb-8">
            <div className="h-10 w-64 rounded bg-gray-100"></div>
            <div className="h-6 w-32 rounded bg-gray-100"></div>
          </div>
          <div className="flex flex-col gap-y-8 py-8">
            {repeat(4).map((index) => (
              <SkeletonCartItem key={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-8">
          <SkeletonOrderSummary />
          <SkeletonCodeForm />
        </div>
      </div>
    </div>
  )
}

export default SkeletonCartPage
