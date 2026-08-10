import { Filter, Heart, ChevronLeft, ChevronRight, ChevronsUpDown, Sparkles, ShieldCheck, MapPin, Bookmark, MessageCircle, User } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";

const profiles = [
  {
    name: "Aisha Sharma, 28",
    location: "Mumbai, Maharashtra",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKOZ6FOqfve-B9B81oRGLDJhgYUcMKgMIsBgzpdWOK_CRXY7cXzxebaRX0BK9CU9rWJC9Z-S6Dz5AeJ1C0NeUlQXrEwZVqN3qdUvKjFl6RKnu9BxgG_Ypv78G0qnY3YH__dBxXUOWjcNSwY8F61tIKRMQrBKIzhx6yTBAcauhBP8rZMYuf3Ml0XtBbhGsa-uHFThncZdWrjqLbLhUQIO0E22bfyxR50RYKzQStyjjCtNByGn6juz-_8g",
    match: "85%",
    profession: "Marketing Director",
    education: "MBA, IIM B",
    height: "5'5\" (165cm)",
    community: "Hindu, Brahmin",
  },
  {
    name: "Rohan Desai, 31",
    location: "Bangalore, Karnataka",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9AT7IRDqLPgsfq3gH871Yx6AX5CIFnFQhz3esHIlUKUA2X0_LIsd_15xfyPqygC0H7yDP9ZjUVHS-uAhA8iWHO_PUC-9IqKXNJDjoiQxQEsTUlEKZ92XnVhIW4ycFfQ0HXgj8oLyE-hxb2i3O9miAbhDSCkzfSpRuvGhuzlyeU8JpysNwIzr12RS_FYzp9mAJiU1r4zcV_OAEllI-upawp3Dm9Kq6zh6n75DeahX_x9Wb1j-J1DJzbg",
    match: "92%",
    profession: "Software Architect",
    education: "MTech, IIT Delhi",
    height: "5'11\" (180cm)",
    community: "Hindu, Rajput",
  },
  {
    name: "Priya Patel, 30",
    location: "New York, USA",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR0T8_vskMyBXLUs1Y0SLnakQ1gMjeDfSS1nTUdAvLYZLIwo_PuOK0XywFYV6-NYekNloZCuMClhLF9GsAaweyLEpwXu2Isd_CfKo97r_fkbzuuTZd6pnxwEz0Pgh46exBR_z0faok3tPiE_Geg-Oye1l-Xe67ElBb6UMDGpaou1TlpIVshRuqMmw41OQYUmzhRkL2-aT6e5lIgPy0M7kPYGvlNPIs2Su4cPBzoPh3iYCGv84edMYVnw",
    match: "78%",
    profession: "Corporate Lawyer",
    education: "JD, Harvard",
    height: "5'7\" (170cm)",
    community: "Hindu, Patel",
  },
];

function FilterBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-surface-container p-4 shadow-sm">
      <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-widest text-primary">{title}</h3>
      {children}
    </div>
  );
}

function SelectRow({ label, options, value }: { label: string; options: string[]; value: string }) {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-[14px] text-on-surface-variant">{label}</label>
      <div className="relative">
        <select
          className="w-full appearance-none rounded-md bg-surface-container-lowest px-3 py-2 text-[14px] outline-none ring-1 ring-transparent focus:ring-primary"
          defaultValue={value}
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <ChevronsUpDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant" />
      </div>
    </div>
  );
}

function CheckRow({ label, checked = false }: { label: string; checked?: boolean }) {
  return (
    <label className="flex cursor-pointer items-center gap-2">
      <input className="h-4 w-4 rounded accent-primary" type="checkbox" defaultChecked={checked} />
      <span className="text-[14px] text-on-surface">{label}</span>
    </label>
  );
}

export default function MatchesPage() {
  return (
    <>
      <Navbar active="discover" />
      <main className="min-h-screen bg-surface pt-20">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-6 py-10 md:flex-row">
          <aside className="hidden h-[calc(100vh-120px)] w-[300px] shrink-0 self-start overflow-y-auto pr-4 md:block">
            <h2 className="mb-4 font-[family-name:var(--font-playfair)] text-[24px] text-primary">
              Refine Search
            </h2>
            <div className="flex flex-col gap-4">
              <FilterBlock title="Basics">
                <div className="mb-4">
                  <label className="mb-2 block text-[14px] text-on-surface-variant">Age Range</label>
                  <div className="flex items-center gap-2">
                    <input className="w-full rounded-md bg-surface-container-lowest p-2 text-[14px] outline-none ring-1 ring-transparent focus:ring-primary" defaultValue="26" />
                    <span className="text-[14px] text-on-surface-variant">to</span>
                    <input className="w-full rounded-md bg-surface-container-lowest p-2 text-[14px] outline-none ring-1 ring-transparent focus:ring-primary" defaultValue="32" />
                  </div>
                </div>
                <SelectRow
                  label="Height"
                  value={"5'0\" and above"}
                  options={["Any Height", "5'0\" and above", "5'4\" and above", "5'8\" and above"]}
                />
                <div>
                  <label className="mb-2 block text-[14px] text-on-surface-variant">Marital Status</label>
                  <div className="flex flex-col gap-2">
                    <CheckRow label="Never Married" checked />
                    <CheckRow label="Divorced" />
                    <CheckRow label="Widowed" />
                  </div>
                </div>
              </FilterBlock>
              <FilterBlock title="Background">
                <SelectRow label="Religion" value="Hindu" options={["Any Religion", "Hindu", "Sikh", "Jain"]} />
                <SelectRow label="Mother Tongue" value="Hindi" options={["Any Language", "Hindi", "Punjabi", "Gujarati"]} />
              </FilterBlock>
              <FilterBlock title="Career">
                <SelectRow
                  label="Education"
                  value="Masters & Above"
                  options={["Any Degree", "Masters & Above", "Bachelors"]}
                />
                <SelectRow
                  label="Annual Income"
                  value="INR 15L - 30L"
                  options={["Any Income", "INR 15L - 30L", "INR 30L - 50L", "INR 50L+"]}
                />
              </FilterBlock>
              <button className="mt-1 rounded-lg bg-primary py-3 text-[12px] font-semibold uppercase tracking-wider text-on-primary shadow-md">
                Apply Filters
              </button>
            </div>
          </aside>
          <section className="min-w-0 flex-1">
            <div className="mb-6 flex flex-col gap-4 border-b border-surface-variant pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <Badge className="mb-2 bg-secondary-container text-on-secondary-container">
                  Intentional Connections
                </Badge>
                <h1 className="font-[family-name:var(--font-playfair)] text-[48px] font-bold leading-[56px] text-primary">
                  Find Your Perfect Match
                </h1>
                <p className="mt-2 max-w-xl text-[16px] text-on-surface-variant">
                  Discover thoughtfully curated profiles based on shared values, heritage, and aspirations.
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-surface-container-low px-4 py-2 shadow-sm">
                <span className="text-[14px] text-on-surface-variant">Sort by:</span>
                <select className="bg-transparent text-[14px] font-medium text-primary outline-none">
                  <option>Highest Match Score</option>
                  <option>Newest Profiles</option>
                  <option>Recently Active</option>
                </select>
              </div>
            </div>
            <button className="mb-6 flex w-full items-center justify-center gap-2 rounded-lg bg-surface-container py-3 text-[12px] font-semibold uppercase tracking-wider text-primary shadow-sm md:hidden">
              <Filter className="h-4 w-4" />
              Filter Results
            </button>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {profiles.map((profile) => (
                <article key={profile.name} className="group relative flex h-[480px] flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-shadow hover:shadow-md">
                  <div className="absolute right-4 top-4 z-10 flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1 rounded-full bg-[#D4AF37]/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                      <Sparkles className="h-3.5 w-3.5" />
                      {profile.match} Match
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase text-on-surface shadow-md">
                      <ShieldCheck className="h-3.5 w-3.5 text-green-600" />
                      Verified
                    </div>
                  </div>
                  <div className="relative h-[60%] overflow-hidden bg-surface-variant">
                    <img src={profile.image} alt={profile.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-[family-name:var(--font-playfair)] text-[24px] leading-tight">{profile.name}</h3>
                      <p className="mt-1 flex items-center gap-1 text-[14px] text-white/90">
                        <MapPin className="h-3.5 w-3.5" />
                        {profile.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-surface-container-lowest p-4">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">Profession</span>
                        <span className="block truncate text-[14px] font-medium text-on-surface">{profile.profession}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">Education</span>
                        <span className="block truncate text-[14px] font-medium text-on-surface">{profile.education}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">Height</span>
                        <span className="block text-[14px] font-medium text-on-surface">{profile.height}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">Community</span>
                        <span className="block text-[14px] font-medium text-on-surface">{profile.community}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 border-t border-surface-variant pt-4">
                      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-primary shadow-sm">
                        <Heart className="h-5 w-5" />
                      </button>
                      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-primary shadow-sm">
                        <MessageCircle className="h-5 w-5" />
                      </button>
                      <button className="flex h-10 flex-1 items-center justify-center rounded-full bg-primary text-[12px] font-semibold uppercase tracking-wider text-on-primary shadow-sm">
                        View Profile
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-10 flex justify-center pb-10">
              <nav className="flex items-center gap-2">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-on-surface-variant">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-[12px] font-semibold text-on-primary">1</button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-[12px] font-semibold text-on-surface-variant">2</button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-[12px] font-semibold text-on-surface-variant">3</button>
                <span className="px-2 text-on-surface-variant">...</span>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-[12px] font-semibold text-on-surface-variant">12</button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-on-surface-variant">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </nav>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
