import AccountLayout from "@modules/account/templates/account-layout"
import OrdersTemplate from "@modules/account/templates/orders-template"
import Meta from "@modules/layout/components/meta"
import Layout from "@modules/layout/templates"
import { NextPageWithLayout } from "types/global"

const Orders: NextPageWithLayout = () => {
  return (
    <>
      <Meta name="Orders" description="Overview of your previous orders." />
      <OrdersTemplate />
    </>
  )
}

Orders.getLayout = (page) => {
  return (
    <Layout>
      <AccountLayout>{page}</AccountLayout>
    </Layout>
  )
}

export default Orders
