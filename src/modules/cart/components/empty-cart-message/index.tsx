import UnderlineLink from "@modules/common/components/underline-link"

const EmptyCartMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-md border border-textBtn bg-[rgba(255,255,255,0.4)] px-8 py-24 text-center shadow-sm">
      <h1 className="text-2xl-semi font-serif">Your shopping bag is empty</h1>
      <p className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        You don&apos;t have anything in your bag. Let&apos;s change that, use
        the link below to start browsing our products.
      </p>
      <div>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
