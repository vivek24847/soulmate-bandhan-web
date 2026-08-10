import { ArrowRight, Heart, MessageCircle, Share2, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/Badge";

export default function ProfilePage() {
  return (
    <>
      <Navbar active="profile" />
      <main className="min-h-screen bg-surface pt-20">
        <section className="relative h-[614px] min-h-[400px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCiJ7HD1kkxWRO6CP96Bz6P8FnUIV6ahFvGtoXGBMBXq3IHiPGD8v0aHcTe3jy8BfBCBmxHHbb2ziITxMruEvOYtpboY48Rw3X3nj2jHAV_YsM8k-rDr7Qe9HDwEFmsVAwfT1b-9m6-Y51ekdxkkZnGs8eSTewGjrZzI0rn8_4cEzSTBsXxkoTFvMezpcYVRbi0ndJdd5VA9siGySmkbGGT4OsWSduRcYZfxgszOZ0_6IjJ0xWetkkmg')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <div className="mx-auto flex max-w-[1200px] items-end justify-between px-6 py-10">
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="bg-secondary-fixed text-on-secondary-fixed">
                    <ShieldCheck className="mr-1 h-3.5 w-3.5" />
                    Verified Identity
                  </Badge>
                  <Badge className="bg-surface-lowest text-primary">
                    <svg className="mr-1 h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    92% Compatibility
                  </Badge>
                </div>
                <h1 className="font-[family-name:var(--font-playfair)] text-[48px] font-bold text-on-primary">
                  Ananya Sharma
                </h1>
                <p className="text-[18px] text-primary-fixed-dim">28 yrs • 5'6" • New Delhi, India</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex h-14 w-14 items-center justify-center rounded-full bg-surface-lowest/20 text-on-primary backdrop-blur-md">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="flex h-14 w-14 items-center justify-center rounded-full bg-surface-lowest/20 text-on-primary backdrop-blur-md">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="inline-flex h-14 items-center gap-2 rounded-full bg-primary px-6 text-[12px] font-semibold uppercase tracking-wider text-on-primary shadow-xl">
                  <MessageCircle className="h-4 w-4" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-6 py-10 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-8">
            <section className="rounded-xl bg-surface-container-lowest p-6 shadow-sm">
              <h2 className="mb-4 font-[family-name:var(--font-playfair)] text-[32px] text-on-surface">
                About Me
              </h2>
              <p className="border-l-2 border-primary/20 pl-4 text-[18px] leading-7 text-on-surface-variant">
                I am a design director based in New Delhi, passionate about creating beautiful, functional spaces.
                I value honesty, intellectual conversations, and a good sense of humor.
              </p>
            </section>
            <section className="rounded-xl bg-surface-container-lowest p-6 shadow-sm">
              <h2 className="mb-4 font-[family-name:var(--font-playfair)] text-[32px] text-on-surface">
                Basic Information
              </h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-3">
                {[
                  ["Date of Birth", "14 October 1995"],
                  ["Height", `5'6" (167cm)`],
                  ["Marital Status", "Never Married"],
                  ["Religion", "Hindu"],
                  ["Community", "Punjabi Khatri"],
                  ["Mother Tongue", "Hindi, English"],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span className="text-[12px] font-semibold uppercase tracking-widest text-on-surface-variant">
                      {label}
                    </span>
                    <span className="text-[16px] font-medium text-on-surface">{value}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <aside className="flex flex-col gap-6 lg:col-span-4">
            <section className="rounded-xl bg-surface-container-lowest p-6 shadow-sm">
              <h2 className="mb-4 font-[family-name:var(--font-playfair)] text-[24px] text-on-surface">
                Education & Career
              </h2>
              <p className="text-[16px] text-on-surface-variant">Design Director at a leading studio.</p>
            </section>
            <section className="rounded-xl bg-surface-container-lowest p-6 shadow-sm">
              <h2 className="mb-4 font-[family-name:var(--font-playfair)] text-[24px] text-on-surface">
                Partner Preferences
              </h2>
              <div className="flex flex-wrap gap-2">
                {["Kind", "Family-oriented", "Educated", "Respectful"].map((item) => (
                  <Badge key={item} className="bg-surface-container-low text-on-surface">
                    {item}
                  </Badge>
                ))}
              </div>
            </section>
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-[12px] font-semibold uppercase tracking-wider text-on-primary shadow-lg">
              View Full Profile
              <ArrowRight className="h-4 w-4" />
            </button>
          </aside>
        </div>
        <Footer />
      </main>
    </>
  );
}
