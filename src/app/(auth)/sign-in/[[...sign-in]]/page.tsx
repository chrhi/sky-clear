import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left side - Decorative */}
      <div className="hidden md:flex md:w-1/2 bg-primary p-12 flex-col justify-between relative">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white mb-6">Welcome Back!</h1>
          <p className="text-blue-100 text-lg max-w-md">
            Log in to access your dashboard and manage your applications.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-1/4 -bottom-1/4 w-2/3 h-2/3 bg-sky-500 rounded-full opacity-20" />
          <div className="absolute -left-1/4 -top-1/4 w-2/3 h-2/3 bg-sky-500 rounded-full opacity-20" />
        </div>

        {/* Footer */}
        <div className="relative z-10">
          <p className="text-blue-100 text-sm">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right side - Sign In Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-sm space-y-8">
          <div className="text-center mb-8 md:hidden">
            <h2 className="text-2xl font-bold text-gray-900">Welcome Back!</h2>
            <p className="text-gray-500 mt-2">Please sign in to continue</p>
          </div>
          <SignIn
            appearance={{
              elements: {
                card: "shadow-none",
                formButtonPrimary:
                  "bg-blue-600 hover:bg-blue-700 text-sm normal-case",
                footerActionLink: "text-blue-600 hover:text-blue-700",
                socialButtonsBlockButton:
                  "border-gray-200 hover:bg-gray-50 text-gray-600 text-sm normal-case",
                formFieldInput:
                  "border-gray-200 focus:border-blue-600 focus:ring-blue-600",
                headerTitle: "text-gray-900",
                headerSubtitle: "text-gray-500",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
