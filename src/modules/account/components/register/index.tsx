import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (e: Error) => {
    setAuthError("An error occured. Please try again.")
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    medusaClient.customers
      .create(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="mt-10 flex max-w-sm flex-col items-center">
      <h1 className="text-2xl-semi mb-2 font-serif">Become a Funto Member</h1>
      <p className="text-base-regular mb-4 text-center text-textLight">
        Create your Funto Member profile, and get access to an enhanced shopping
        experience.
      </p>
      <form className="flex w-full flex-col" onSubmit={onSubmit}>
        <div className="flex w-full flex-col gap-y-2">
          <Input
            label="First name"
            {...register("first_name", { required: "First name is required" })}
            autoComplete="given-name"
            errors={errors}
          />
          <Input
            label="Last name"
            {...register("last_name", { required: "Last name is required" })}
            autoComplete="family-name"
            errors={errors}
          />
          <Input
            label="Email"
            {...register("email", { required: "Email is required" })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label="Phone"
            {...register("phone")}
            autoComplete="tel"
            errors={errors}
          />
          <Input
            label="Password"
            {...register("password", {
              required: "Password is required"
            })}
            type="password"
            autoComplete="new-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-small-regular w-full text-rose-500">
              These credentials do not match our records
            </span>
          </div>
        )}
        <span className="text-small-regular mt-6 text-center text-textLight">
          By creating an account, you agree to Funto&apos;s{" "}
          <Link href="/content/privacy-policy">
            <a className="underline">Privacy Policy</a>
          </Link>{" "}
          and{" "}
          <Link href="/content/terms-of-use">
            <a className="underline">Terms of Use</a>
          </Link>
          .
        </span>
        <Button className="mt-6">Join</Button>
      </form>
      <span className="text-md-regular mt-6 text-center text-textLight">
        Already a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Sign in
        </button>
        .
      </span>
    </div>
  )
}

export default Register
