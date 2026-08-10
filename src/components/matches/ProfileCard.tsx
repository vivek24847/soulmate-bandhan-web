import { ArrowRight, Heart, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

type ProfileCardProps = {
  name: string;
  age: string;
  location: string;
  image: string;
  match: string;
};

export function ProfileCard({ name, age, location, image, match }: ProfileCardProps) {
  return (
    <article className="group relative flex h-[480px] flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-shadow hover:shadow-md">
      <div className="absolute right-4 top-4 z-10 flex flex-col items-end gap-2">
        <Badge className="bg-[#D4AF37] text-white shadow-md">
          <Sparkles className="mr-1 h-3 w-3" />
          Premium
        </Badge>
        <Badge className="bg-secondary-fixed text-on-secondary-fixed shadow-md">
          <ShieldCheck className="mr-1 h-3.5 w-3.5" />
          {match} Match
        </Badge>
      </div>
      <div className="relative h-[320px] overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h3 className="font-[family-name:var(--font-playfair)] text-[24px] font-semibold text-on-surface">
            {name}
          </h3>
          <p className="mt-1 text-[16px] text-on-surface-variant">
            {age} · {location}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-[12px] font-semibold uppercase tracking-wider text-primary">
            <Heart className="h-4 w-4" />
            Shortlist
          </button>
          <div className="flex items-center gap-2">
            <button className="rounded-full bg-surface-container-low px-3 py-3 text-primary shadow-sm">
              <MessageCircle className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-on-primary shadow-lg">
              View Profile
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
