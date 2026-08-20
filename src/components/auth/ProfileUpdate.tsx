"use client";

import { useActionState, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { updateProfile } from "@/app/actions/profile";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const initialProfile : any = {
  gender: "",
  dateOfBirth: "",
  religion: "",
  caste: "",
  city: "",
  state: "",
  country: "India",
  education: "",
  occupation: "",
  interests: [] as string[],
  about: "",
};

const interestOptions = [
  "Travel",
  "Music",
  "Movies",
  "Reading",
  "Sports",
  "Cooking",
  "Photography",
  "Fitness",
];
const ProfileUpdate = () => {

const [state, formAction, isPending] = useActionState(
    updateProfile,
    initialProfile
  );

  const router = useRouter();

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);

      setTimeout(() => {
        router.push("/matches");
      }, 1000);
    } else {
      toast.error(state.message);
    }
  }, [state, router]);
  return (
    
    <main className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto w-full max-w-3xl">

        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 font-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-primary">
            Complete your profile
          </p>

          <h1 className="font-sans text-3xl font-semibold text-on-surface">
            Tell us about yourself
          </h1>

          <p className="mt-2 max-w-xl text-[15px] leading-6 text-on-surface-variant">
            Help us understand you better so we can find meaningful
            connections for you.
          </p>
        </div>

        <form action={formAction} className="flex flex-col gap-8">

          {/* Basic Information */}
          <section className="rounded-xl border border-surface-variant bg-surface p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-on-surface">
                Basic Information
              </h2>

              <p className="mt-1 text-sm text-on-surface-variant">
                A few details about you.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              {/* Gender */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="gender"
                  className="text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant"
                >
                  Gender
                </label>

                <select
                  id="gender"
                  name="gender"
                  defaultValue=""
                  className="h-12 w-full rounded-lg border border-surface-variant bg-surface px-4 text-[16px] text-on-surface outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* DOB */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="dateOfBirth"
                  className="text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant"
                >
                  Date of Birth
                </label>

                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  className="h-12 w-full rounded-lg border border-surface-variant bg-surface px-4 text-[16px] text-on-surface outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Religion */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="religion"
                  className="text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant"
                >
                  Religion
                </label>

                <select
                  id="religion"
                  name="religion"
                  defaultValue=""
                  className="h-12 w-full rounded-lg border border-surface-variant bg-surface px-4 text-[16px] text-on-surface outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                >
                  <option value="">Select religion</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Sikh">Sikh</option>
                  <option value="Christian">Christian</option>
                  <option value="Buddhist">Buddhist</option>
                  <option value="Jain">Jain</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Caste */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="caste"
                  className="text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant"
                >
                  Caste
                </label>

                <input
                  id="caste"
                  name="caste"
                  type="text"
                  placeholder="Enter your caste"
                  className="h-12 w-full rounded-lg border border-surface-variant bg-surface px-4 text-[16px] text-on-surface outline-none placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

            </div>
          </section>

          {/* Location */}
          <section className="rounded-xl border border-surface-variant bg-surface p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-on-surface">
                Location
              </h2>

              <p className="mt-1 text-sm text-on-surface-variant">
                Where are you currently based?
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="city"
                  className="text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant"
                >
                  City
                </label>

                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Chandigarh"
                  className="h-12 w-full rounded-lg border border-surface-variant bg-surface px-4 text-[16px] text-on-surface outline-none placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="state"
                  className="text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant"
                >
                  State
                </label>

                <input
                  id="state"
                  name="state"
                  type="text"
                  placeholder="Chandigarh"
                  className="h-12 w-full rounded-lg border border-surface-variant bg-surface px-4 text-[16px] text-on-surface outline-none placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="country"
                  className="text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant"
                >
                  Country
                </label>

                <input
                  id="country"
                  name="country"
                  type="text"
                  defaultValue="India"
                  className="h-12 w-full rounded-lg border border-surface-variant bg-surface px-4 text-[16px] text-on-surface outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

            </div>
          </section>

          {/* Education & Career */}
          <section className="rounded-xl border border-surface-variant bg-surface p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-on-surface">
                Education & Career
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="education"
                  className="text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant"
                >
                  Education
                </label>

                <input
                  id="education"
                  name="education"
                  type="text"
                  placeholder="MBA"
                  className="h-12 w-full rounded-lg border border-surface-variant bg-surface px-4 text-[16px] text-on-surface outline-none placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="occupation"
                  className="text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant"
                >
                  Occupation
                </label>

                <input
                  id="occupation"
                  name="occupation"
                  type="text"
                  placeholder="Software Engineer"
                  className="h-12 w-full rounded-lg border border-surface-variant bg-surface px-4 text-[16px] text-on-surface outline-none placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

            </div>
          </section>

          {/* Interests */}
          <section className="rounded-xl border border-surface-variant bg-surface p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-on-surface">
                Interests
              </h2>

              <p className="mt-1 text-sm text-on-surface-variant">
                Select a few things you enjoy.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {interestOptions.map((interest) => (
                <label key={interest} className="cursor-pointer">
                  <input
                    type="checkbox"
                    name="interests"
                    value={interest}
                    className="peer sr-only"
                  />

                  <span className="block rounded-full border border-surface-variant px-4 py-2 text-sm font-medium text-on-surface transition-all peer-checked:border-primary peer-checked:bg-primary peer-checked:text-on-primary">
                    {interest}
                  </span>
                </label>
              ))}
            </div>
          </section>

          {/* About */}
          <section className="rounded-xl border border-surface-variant bg-surface p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-on-surface">
                About You
              </h2>

              <p className="mt-1 text-sm text-on-surface-variant">
                Tell others a little about yourself.
              </p>
            </div>

            <textarea
              id="about"
              name="about"
              rows={5}
              placeholder="Tell us something about yourself..."
              className="w-full resize-none rounded-lg border border-surface-variant bg-surface px-4 py-3 text-[16px] text-on-surface outline-none placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </section>

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 text-[16px] font-semibold text-on-primary transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? "Saving Profile..." : "Save Profile"}

            {!isPending && <ArrowRight className="h-5 w-5" />}
          </button>

        </form>
      </div>
    </main>
  
  )
}

export default ProfileUpdate
