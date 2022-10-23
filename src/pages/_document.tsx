import { MEDUSA_BACKEND_URL } from "@lib/config"
import Document, { Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    const uri = MEDUSA_BACKEND_URL
    const { hostname } = new URL(uri)

    return (
      <Html lang="en">
        <Head>
          <link rel="dns-prefetch" href={`//${hostname}`} />
          <link rel="preconnect" href={`//${hostname}`} crossOrigin="true" />
          <link
            href="https://api.fontshare.com/v2/css?f[]=montserrat@500,400&f[]=clash-display@400,700,500,600,1&f[]=archivo@300,500,400,600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body style={{ backgroundColor: "#DAD3C8", color: "#262525" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
