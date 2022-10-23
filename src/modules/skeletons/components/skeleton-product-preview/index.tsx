const SkeletonProductPreview = () => {
  return (
    <div className="animate-pulse rounded-md border border-textBtn bg-[rgba(255,255,255,0.4)]">
      <div className="aspect-[29/34] w-full rounded-md bg-gray-100"></div>
      <div className="text-base-regular m-2 p-3">
        <div className="h-6 w-3/5 rounded bg-gray-100"></div>

        <div className="mt-2 h-6 w-2/5 rounded bg-gray-100"></div>
      </div>
    </div>
  )
}

export default SkeletonProductPreview
