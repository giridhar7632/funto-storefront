import repeat from "@lib/util/repeat"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

const SkeletonCollectionPage = () => {
  return (
    <div className="content-container py-6">
      <div className="mb-8 animate-pulse">
        <div className="h-20 w-96 bg-gray-100"></div>
      </div>
      <ul className="grid flex-1 grid-cols-2 gap-x-4 gap-y-8 small:grid-cols-3 medium:grid-cols-4">
        {repeat(8).map((index) => (
          <li key={index}>
            <SkeletonProductPreview />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkeletonCollectionPage
