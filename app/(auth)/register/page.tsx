import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/dist/client/link";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <h1 className="text-2xl font-bold">Create Account</h1>
      <p className="mt-2 mb-4 text-md text-gray-500">Enter your details to create an account.</p>
      {/* register form or authentication logic here */}
      <form className="w-full max-w-xs">
        <FieldSet className="w-full max-w-xs">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input id="name" type="text" placeholder="John Doe" />
            </Field>
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
        <Button className="mt-4 w-full cursor-pointer bg-blue-500 hover:bg-blue-600">
          Register
        </Button>
      </form>
      <div className="mt-4 flex justify-center items-center gap-0.5">
        <p className="text-sm text-gray-500">Already have an account?</p>
        <Link
          href="/login"
          className=" text-blue-500 hover:underline"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}