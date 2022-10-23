import DiscountCode from "@modules/checkout/components/discount-code"
import GiftCard from "@modules/checkout/components/gift-card"
import PaymentButton from "@modules/checkout/components/payment-button"
import CartTotals from "@modules/common/components/cart-totals"
import { useCart } from "medusa-react"

const CheckoutSummary = () => {
  const { cart } = useCart()

  if (!cart?.id) {
    return null
  }

  return (
    <div className="sticky top-0 flex flex-col-reverse gap-y-8 small:flex-col">
      <div className="flex w-full flex-col gap-y-6 bg-white p-6">
        <CartTotals cart={cart} />
        <PaymentButton paymentSession={cart?.payment_session} />
      </div>
      <div className="bg-white p-6">
        <DiscountCode cart={cart} />
      </div>
      <GiftCard cart={cart} />
    </div>
  )
}

export default CheckoutSummary
