import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function forgetPasswordPage() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <h1 className="font-inter text-2xl font-bold">Forgot Password </h1>
      <p className="text-md mt-2 mb-4 text-gray-500 text-center">Enter your email address and we will send you password reset instructions.</p>
      {/* Add your forget password form or logic here */}
      <form className="w-full max-w-xs">
        <FieldSet className="w-full max-w-xs">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">Email</FieldLabel>
              <Input
                id="username"
                type="text"
                placeholder="email@example.com"
              />
            </Field>
          
          </FieldGroup>
        </FieldSet>
       
        <Button className="mt-4 w-full cursor-pointer bg-blue-500 hover:bg-blue-600">
          Forgot Password
        </Button>
      </form>
    </div>
  );
}