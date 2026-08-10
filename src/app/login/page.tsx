import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout
      className="bg-surface-lowest"
      background={
        <>
          <div className="pointer-events-none absolute left-[-5%] top-[-10%] h-[40%] w-[40%] rounded-full bg-primary-fixed/30 blur-[100px]" />
          <div className="pointer-events-none absolute bottom-[-10%] right-[-5%] h-[30%] w-[30%] rounded-full bg-secondary-fixed/20 blur-[80px]" />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03] mix-blend-multiply">
            <svg fill="none" height="600" viewBox="0 0 600 600" width="600" xmlns="http://www.w3.org/2000/svg">
              <circle cx="300" cy="300" r="280" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1" className="text-primary" />
              <circle cx="300" cy="300" r="240" stroke="currentColor" strokeWidth="1" className="text-primary" />
              <path d="M300 20 L300 580 M20 300 L580 300" stroke="currentColor" strokeWidth="1" className="text-primary" />
              <path d="M100 100 L500 500 M100 500 L500 100" stroke="currentColor" strokeWidth="1" className="text-primary" />
              <circle cx="300" cy="300" r="160" stroke="currentColor" strokeWidth="2" className="text-primary" />
              <circle cx="300" cy="300" r="80" stroke="currentColor" strokeWidth="1" className="text-primary" />
            </svg>
          </div>
        </>
      }
    >
      <div className="relative mx-auto grid min-h-[calc(100vh-120px)] w-full max-w-[1000px] grid-cols-1 overflow-hidden rounded-[20px] bg-surface shadow-2xl transition-transform duration-500 md:grid-cols-2">
        <div className="relative hidden min-h-[600px] overflow-hidden bg-surface-container md:block">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDj_rnK6l5aCQXlJCRE5fRXj_mPB70VbC91U_dDPgvpYVCU8vAh-JdxyuzXGmdtiv4mlfcGxdmqNihfi8M-a1L3F0laxIYWpbjWyLDlzQHsKYfN_gkyuSEbMxtEW1-Vebz5XXTFd96r6um_t5oaI9VarRE3dKZEzRirIpZHB2M1muXFSj6a2clQThoRKewm9ItA3PV6_xLXjJoNu2norewBtUOqwbmVe9kXCEpbQ2iJJAn4n_9aH68MKQ')",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-lowest/20 to-transparent" />
          <div className="absolute bottom-0 left-0 flex w-full flex-col gap-4 p-10">
            <div className="flex items-center gap-3">
              <span className="h-1 w-12 bg-secondary-fixed" />
              <span className="text-[12px] font-semibold uppercase tracking-wider text-secondary-fixed">
                Heritage &amp; Modernity
              </span>
            </div>
            <h2 className="max-w-[80%] font-[family-name:var(--font-playfair)] text-[48px] font-bold leading-[56px] tracking-[-0.02em] text-on-primary">
              Find Your
              <br />
              Forever.
            </h2>
            <p className="max-w-[90%] text-[16px] leading-6 text-surface-lowest/90">
              Join a curated community of discerning individuals seeking meaningful connection.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-surface-lowest p-6 md:px-20 md:py-10">
          <div className="mb-6">
            <h1 className="font-[family-name:var(--font-playfair)] text-[32px] font-bold leading-10 tracking-tight text-on-surface">
              Welcome Back
            </h1>
            <p className="mt-2 text-[16px] leading-6 text-on-surface-variant">
              Please enter your details to continue.
            </p>
          </div>
          <LoginForm />
          <div className="mt-10 text-center">
            <p className="text-[16px] leading-6 text-on-surface-variant">
              New to Soulmate Bandhan?{" "}
              <a className="ml-1 text-[12px] font-semibold uppercase tracking-[0.05em] text-primary hover:underline" href="/register">
                Register Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
