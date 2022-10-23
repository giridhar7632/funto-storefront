import LoginTemplate from "@modules/account/templates/login-template"
import Meta from "@modules/layout/components/meta"
import Layout from "@modules/layout/templates"
import { NextPageWithLayout } from "types/global"

const Login: NextPageWithLayout = () => {
  return (
    <>
      <Meta name="Sign in" description="Sign in to your Funto account." />
      <LoginTemplate />
    </>
  )
}

Login.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default Login
