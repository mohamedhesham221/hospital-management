import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <h1 className="font-inter text-2xl font-bold">Welcome Back</h1>
      <p className="text-md mt-2 mb-4 text-gray-500">
        Glad to see you again. Log in to your account.
      </p>
      {/* login form or authentication logic here */}

      <form className="w-full max-w-xs">
        <FieldSet className="w-full max-w-xs">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">Email Address</FieldLabel>
              <Input
                id="username"
                type="text"
                placeholder="email@example.com"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" placeholder="••••••••" />
            </Field>
          </FieldGroup>
        </FieldSet>
        <div className="mt-2 flex justify-end">
          <Link
            href="/forget-password"
            className="text-sm text-blue-500 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        <Button className="mt-4 w-full cursor-pointer bg-blue-500 hover:bg-blue-600">
          Log In
        </Button>
      </form>
      <div className="mt-4 flex justify-center items-center gap-0.5">
        <p className="text-sm text-gray-500">Don&apos;t have an account?</p>
        <Link
          href="/register"
          className=" text-blue-500 hover:underline"
        >
          Sign up
        </Link>
      </div>
    </div>
  )
}
