import { StoreGetProductsParams } from "@medusajs/medusa"
import Meta from "@modules/layout/components/meta"
import Layout from "@modules/layout/templates"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementList from "@modules/store/components/refinement-list"
import { useState } from "react"
import { NextPageWithLayout } from "types/global"

const Store: NextPageWithLayout = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({})

  return (
    <>
      <Meta name="Store" description="Explore all of our products." />
      <div className="flex flex-col py-6 small:flex-row small:items-start">
        <RefinementList refinementList={params} setRefinementList={setParams} />
        <InfiniteProducts params={params} />
      </div>
    </>
  )
}

Store.getLayout = (page) => <Layout>{page}</Layout>

export default Store
