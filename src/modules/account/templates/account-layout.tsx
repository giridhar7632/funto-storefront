import { useAccount } from "@lib/context/account-context"
import UnderlineLink from "@modules/common/components/underline-link"
import Spinner from "@modules/common/icons/spinner"
import React, { useEffect } from "react"
import AccountNav from "../components/account-nav"

const AccountLayout: React.FC = ({ children }) => {
  const { customer, retrievingCustomer, checkSession } = useAccount()

  useEffect(() => {
    checkSession()
  }, [checkSession])

  if (retrievingCustomer || !customer) {
    return (
      <div className="flex h-full min-h-[640px] w-full items-center justify-center text-text">
        <Spinner size={36} />
      </div>
    )
  }

  return (
    <div className="flex-1 rounded-md small:bg-bgLight small:py-12">
      <div className="mx-auto flex h-full max-w-5xl flex-1 flex-col bg-[rgba(255,255,255,0.4)]">
        <div className="grid grid-cols-1 py-6 small:grid-cols-[240px_1fr] small:px-8 small:py-12 ">
          <div>
            <AccountNav />
          </div>
          <div className="flex-1">{children}</div>
        </div>
        <div className="flex flex-col items-end justify-between gap-x-8 border-gray-200 px-8 py-12 small:flex-row small:border-t">
          <div>
            <h3 className="text-xl-semi mb-4">Got questions?</h3>
            <span className="text-small-regular">
              You can find frequently asked questions and answers on our
              customer service page.
            </span>
          </div>
          <div>
            <UnderlineLink href="/customer-service">
              Customer Service
            </UnderlineLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout
