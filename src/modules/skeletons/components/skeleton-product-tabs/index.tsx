import repeat from "@lib/util/repeat"

const SkeletonProductTabs = () => {
  return (
    <div className="flex w-full animate-pulse flex-col">
      <div className="flex items-center gap-x-6 rounded border-b border-gray-100 pb-2">
        {repeat(2).map((index) => (
          <div
            key={index}
            className="h-6 w-12 flex-1 basis-0 rounded bg-gray-100 pb-2"
          ></div>
        ))}
      </div>
      <div className="py-8">
        <div className="grid grid-cols-2 gap-x-8">
          {repeat(2).map((index) => (
            <div className="flex flex-col gap-y-4" key={index}>
              {repeat(3).map((index) => (
                <div className="flex flex-col gap-y-2" key={index}>
                  <div className="h-4 w-32 rounded bg-gray-100"></div>
                  <div className="h-2 w-16 rounded bg-gray-100"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkeletonProductTabs
