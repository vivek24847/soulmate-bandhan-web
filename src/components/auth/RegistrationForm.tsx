import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { SocialLogin } from "@/components/auth/SocialLogin";

export function RegistrationForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input label="Full Name" placeholder="e.g. Aditi Sharma" />
        <Input label="Email" type="email" placeholder="aditi@example.com" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="font-sans text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant">
            Mobile
          </label>
          <div className="flex gap-2">
            <select className="h-12 w-24 rounded-lg border border-surface-variant bg-surface px-3 font-sans text-[16px] text-on-surface outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary">
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <Input className="flex-1" label="Mobile number" placeholder="98765 43210" />
          </div>
        </div>
        <PasswordInput label="Password" placeholder="••••••••" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input label="Date of Birth" type="date" />
        <Input label="Location" placeholder="City, Country" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="font-sans text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant">
            Gender
          </label>
          <div className="flex gap-3">
            {["Male", "Female"].map((option) => (
              <label
                key={option}
                className="flex flex-1 cursor-pointer items-center justify-center rounded-lg border border-surface-variant bg-surface px-3 py-3 text-[14px] text-on-surface-variant transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/10 has-[:checked]:text-primary hover:border-primary"
              >
                <input className="hidden" type="radio" name="gender" value={option.toLowerCase()} />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
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
                  className="hidden"
                  type="radio"
                  name="looking_for"
                  value={option.toLowerCase()}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <Checkbox
        label={
          <>
            I agree to the <span className="text-primary hover:underline">Terms &amp; Conditions</span>{" "}
            and <span className="text-primary hover:underline">Privacy Policy</span>.
          </>
        }
      />

      <div className="mt-4 flex flex-col gap-4">
        <Button type="submit">
          Create Account
          <ArrowRight className="h-5 w-5" />
        </Button>
        <SocialLogin label="Sign up with Google" />
      </div>
    </form>
  );
}
