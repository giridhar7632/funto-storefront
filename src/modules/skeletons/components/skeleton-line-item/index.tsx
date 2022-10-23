const SkeletonLineItem = () => {
  return (
    <div className="grid animate-pulse grid-cols-[122px_1fr] gap-x-4">
      <div className="h-[143px] w-[122px] rounded bg-gray-200" />
      <div className="text-base-regular flex items-start justify-between">
        <div>
          <div className="flex flex-col gap-y-2">
            <div className="h-3 w-[120px] rounded bg-gray-200" />
            <div className="h-3 w-[65px] rounded bg-gray-200" />
          </div>
        </div>
        <div className="h-3 w-[65px] rounded bg-gray-200" />
      </div>
    </div>
  )
}

export default SkeletonLineItem
