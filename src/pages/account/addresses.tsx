import AccountLayout from "@modules/account/templates/account-layout"
import AddressesTemplate from "@modules/account/templates/addresses-template"
import Meta from "@modules/layout/components/meta"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"

const Addresses: NextPageWithLayout = () => {
  return (
    <>
      <Meta name="Addresses" description="View your addresses" />
      <AddressesTemplate />
    </>
  )
}

Addresses.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <AccountLayout>{page}</AccountLayout>
    </Layout>
  )
}

export default Addresses
