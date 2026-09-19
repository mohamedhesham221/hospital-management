import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function NewPasswordPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-2">
        <h1 className="font-inter text-2xl font-bold">Create New Password</h1>
        <p className="text-md mt-2 mb-4 text-gray-500">Please enter a new password.</p>
        {/* Add your new password form or logic here */}
        <form className="w-full max-w-xs">
          <FieldSet className="w-full max-w-xs">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input id="password" type="password" placeholder="••••••••" />
              </Field>
              <Field>
                <FieldLabel htmlFor="confirmPassword">
                  Confirm Password
                </FieldLabel>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                />
              </Field>
            </FieldGroup>
          </FieldSet>

          <Button className="mt-4 w-full cursor-pointer bg-blue-500 hover:bg-blue-600">
            Reset Password
          </Button>
        </form>
      </div>
    </>
  )
}
