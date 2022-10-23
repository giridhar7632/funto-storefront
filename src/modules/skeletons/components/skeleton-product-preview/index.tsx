const SkeletonProductPreview = () => {
  return (
    <div className="animate-pulse">
      <div className="aspect-[29/34] w-full bg-gray-100"></div>
      <div className="text-base-regular mt-2">
        <div className="h-6 w-3/5 bg-gray-100"></div>

        <div className="mt-2 h-6 w-2/5 bg-gray-100"></div>
      </div>
    </div>
  )
}

export default SkeletonProductPreview
