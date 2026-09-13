import { User } from "lucide-react"
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-5">
      <header className="mb-15 w-full text-start md:mb-4">
        <h1 className="text-3xl font-bold text-blue-500 font-inter">MediCore</h1>
      </header>
      <div className="h-full w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <div className="mx-auto mb-4 flex w-fit flex-col items-center justify-center rounded-full border-2 border-blue-300  p-4">
          <User className="mx-auto h-8 w-8 text-blue-500" />
        </div>
        {children}
      </div>
    </div>
  )
}
