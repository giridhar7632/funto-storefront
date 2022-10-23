import repeat from "@lib/util/repeat"
import SkeletonButton from "@modules/skeletons/components/skeleton-button"
import SkeletonProductTabs from "@modules/skeletons/components/skeleton-product-tabs"

const SkeletonProductPage = () => {
  return (
    <div>
      <div className="content-container relative flex flex-col py-6 small:flex-row small:items-start">
        <div className="flex w-full flex-col gap-y-8">
          <div className="relative flex items-start">
            <div className="sticky top-20 hidden flex-col gap-y-4 small:flex">
              {repeat(2).map((index) => {
                return (
                  <div
                    key={index}
                    className="h-14 w-12 rounded bg-gray-100"
                  ></div>
                )
              })}
            </div>
            <div className="flex flex-1 flex-col gap-y-4 small:mx-16">
              {repeat(2).map((index) => {
                return (
                  <div
                    key={index}
                    className="relative aspect-[29/34] w-full rounded bg-gray-100"
                  ></div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-y-12 py-8 small:sticky small:top-20 small:max-w-[344px] small:py-0 medium:max-w-[400px]">
          <div>
            <div className="mx-auto flex flex-col gap-y-12 lg:max-w-[500px]">
              <div>
                <div className="flex flex-col gap-y-2">
                  <div className="h-4 w-32 rounded bg-gray-100"></div>
                  <div className="h-12 w-52 rounded bg-gray-100"></div>

                  <div className="mt-4 flex flex-col gap-y-2">
                    {repeat(4).map((index) => (
                      <div
                        key={index}
                        className="w-62 h-4 rounded bg-gray-100"
                      ></div>
                    ))}
                  </div>

                  <div className="my-8 flex flex-col gap-y-6">
                    <div className="h-6 w-16 rounded bg-gray-100"></div>
                    <div className="grid grid-cols-3 gap-2 lg:grid-cols-6">
                      {repeat(4).map((v) => {
                        return (
                          <div
                            key={v}
                            className="h-[50px] w-[50px] rounded bg-gray-100"
                          ></div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="h-9 w-20 rounded bg-gray-100"></div>
                  </div>

                  <SkeletonButton />
                </div>
              </div>
            </div>
          </div>
          <SkeletonProductTabs />
        </div>
      </div>
    </div>
  )
}

export default SkeletonProductPage
