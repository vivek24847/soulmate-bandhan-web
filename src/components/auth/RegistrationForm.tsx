"use client"
import { ArrowRight } from "lucide-react";
import { useActionState } from "react";



const initialState : any = {
  success:false,
  message:"",
  error:{}
}

const register = (previousData: any , formData: any) => {
 
 const data = {
    mobile: formData.get("mobile") ,
    dateOfBirth: formData.get("dateOfBirth"),
    password: formData.get("password"),
    location: formData.get("location"),
    gender: formData.get("gender"),
    lookingFor: formData.get("lookingFor"),
    countryCode: formData.get("countryCode"),
    terms:formData.get("terms")

 }

 console.log("whatformData" , data)
}

export function RegistrationForm() {

  const [state , formAction , isPending] = useActionState(register , initialState)
  return (
    <form action={formAction} className="flex flex-col gap-6">
      {/* Mobile & Password */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Mobile */}
        <div className="flex min-w-0 flex-col gap-2">
          <label
            htmlFor="mobile"
            className="font-sans text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant"
          >
            Mobile
          </label>

          <div className="flex min-w-0 gap-2">
            <select
              id="country_code"
              name="countryCode"
              className="h-12 w-20 shrink-0 rounded-lg border border-surface-variant bg-surface px-3 font-sans text-[16px] text-on-surface outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>

            <input
              id="mobile"
              name="mobile"
              type="tel"
              placeholder="98765 43210"
              className="h-12 min-w-0 flex-1 rounded-lg border border-surface-variant bg-surface px-4 font-sans text-[16px] text-on-surface outline-none transition-all placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Password */}
        <div className="flex min-w-0 flex-col gap-2">
          <label
            htmlFor="password"
            className="font-sans text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant"
          >
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            className="h-12 w-full min-w-0 rounded-lg border border-surface-variant bg-surface px-4 font-sans text-[16px] text-on-surface outline-none transition-all placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      {/* Date of Birth & Location */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Date of Birth */}
        <div className="flex min-w-0 flex-col gap-2">
          <label
            htmlFor="date_of_birth"
            className="font-sans text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant"
          >
            Date of Birth
          </label>

          <input
            id="date_of_birth"
            name="dateOfBirth"
            type="date"
            className="h-12 w-full min-w-0 rounded-lg border border-surface-variant bg-surface px-4 font-sans text-[16px] text-on-surface outline-none transition-all placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Location */}
        <div className="flex min-w-0 flex-col gap-2">
          <label
            htmlFor="location"
            className="font-sans text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant"
          >
            Location
          </label>

          <input
            id="location"
            name="location"
            type="text"
            placeholder="City, Country"
            className="h-12 w-full min-w-0 rounded-lg border border-surface-variant bg-surface px-4 font-sans text-[16px] text-on-surface outline-none transition-all placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      {/* Gender & Looking For */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Gender */}
        <div className="flex min-w-0 flex-col gap-2">
          <label className="font-sans text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant">
            Gender
          </label>

          <div className="flex gap-3">
            {["Male", "Female"].map((option) => (
              <label
                key={option}
                className="flex flex-1 cursor-pointer items-center justify-center rounded-lg border border-surface-variant bg-surface px-3 py-3 text-[14px] text-on-surface-variant transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/10 has-[:checked]:text-primary hover:border-primary"
              >
                <input
                  type="radio"
                  name="gender"
                  value={option.toLowerCase()}
                  className="hidden"
                />

                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Looking For */}
        <div className="flex min-w-0 flex-col gap-2">
          <label className="font-sans text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant">
            Looking For
          </label>

          <div className="flex gap-3">
            {["Groom", "Bride"].map((option) => (
              <label
                key={option}
                className="flex flex-1 cursor-pointer items-center justify-center rounded-lg border border-surface-variant bg-surface px-3 py-3 text-[14px] text-on-surface-variant transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/10 has-[:checked]:text-primary hover:border-primary"
              >
                <input
                  type="radio"
                  name="lookingFor"
                  value={option.toLowerCase()}
                  className="hidden"
                />

                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <label className="flex cursor-pointer items-start gap-3 text-[14px] text-on-surface-variant">
        <input
          type="checkbox"
          name="terms"
          className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-primary"
        />

        <span>
          I agree to the{" "}
          <span className="text-primary hover:underline">
            Terms &amp; Conditions
          </span>{" "}
          and{" "}
          <span className="text-primary hover:underline">
            Privacy Policy
          </span>
          .
        </span>
      </label>

      {/* Submit & Google */}
      <div className="mt-4 flex flex-col gap-4">
        <button
          type="submit"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 font-sans text-[16px] font-semibold text-on-primary transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Create Account
          <ArrowRight className="h-5 w-5" />
        </button>

        <button
          type="button"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-surface-variant bg-surface px-4 font-sans text-[16px] font-semibold text-on-surface transition-all hover:bg-surface-variant/20 focus:outline-none focus:ring-1 focus:ring-primary"
        >
          Sign up with Google
        </button>
      </div>
    </form>
  );
}