import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { cn } from "@/lib/cn";

type NavbarProps = {
  active?: "discover" | "messages" | "profile" | "requests" | "connections";
};

export function Navbar({ active = "discover" }: NavbarProps) {
  const item = (key: NavbarProps["active"], label: string) => (
    <a
      href={
        key === "discover"
          ? "/matches"
          : key === "messages"
            ? "/messages"
            : "/profile/1"
      }
      className={cn(
        "uppercase tracking-wider transition-colors",
        active === key ? "font-bold text-primary" : "text-on-surface-variant hover:text-primary",
      )}
    >
      {label}
    </a>
  );

  return (
    <header className="fixed top-0 z-50 w-full border-b border-primary/10 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <img
            alt="Soulmate Bandhan Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa9MICkmv6ho6hKvTEYbF_Gg96_ow68otNqmDY6qL1K-kJrjxk_7Vghhvvl6f9SEbba4DBZ1TQHpZYdJpNbYsWdaPgp94UwkKu7O_riBHFNnNzkEBLoVpdEIRr5M2p2W5pMNX_BCUk-cz1kz6EgxHMIn0Gfa8TpldhN33YPut2Yz72XkSGYWXj6h1UJ0fFtC762KB0NegMnT3-KIOTNWo0UO_9ppM_VfxSsPOWBpMING9jynG6CX3Z0w"
          />
          <span className="font-[family-name:var(--font-playfair)] text-[24px] font-semibold text-primary">
            Soulmate Bandhan
          </span>
        </div>
        <nav className="hidden items-center gap-10 md:flex">{item("discover", "Discover")}{item("requests", "Requests")}{item("connections", "Connections")}{item("messages", "Messages")}{item("profile", "Profile")}</nav>
        <div className="flex items-center gap-4">
          <Badge className="border border-primary text-primary">Premium</Badge>
          <Avatar
            size="sm"
            alt="Profile"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9AT7IRDqLPgsfq3gH871Yx6AX5CIFnFQhz3esHIlUKUA2X0_LIsd_15xfyPqygC0H7yDP9ZjUVHS-uAhA8iWHO_PUC-9IqKXNJDjoiQxQEsTUlEKZ92XnVhIW4ycFfQ0HXgj8oLyE-hxb2i3O9miAbhDSCkzfSpRuvGhuzlyeU8JpysNwIzr12RS_FYzp9mAJiU1r4zcV_OAEllI-upawp3Dm9Kq6zh6n75DeahX_x9Wb1j-J1DJzbg"
            className="border-2 border-surface-container-high"
          />
        </div>
      </div>
    </header>
  );
}
