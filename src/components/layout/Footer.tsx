export function Footer() {
  return (
    <footer className="mt-xl w-full border-t border-outline-variant/30 bg-surface-container-low py-xl">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-lg px-6 md:grid-cols-4">
        <div className="flex flex-col gap-sm">
          <div className="flex items-center gap-2">
            <img
              alt="Logo"
              className="h-6 w-auto opacity-70"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa9MICkmv6ho6hKvTEYbF_Gg96_ow68otNqmDY6qL1K-kJrjxk_7Vghhvvl6f9SEbba4DBZ1TQHpZYdJpNbYsWdaPgp94UwkKu7O_riBHFNnNzkEBLoVpdEIRr5M2p2W5pMNX_BCUk-cz1kz6EgxHMIn0Gfa8TpldhN33YPut2Yz72XkSGYWXj6h1UJ0fFtC762KB0NegMnT3-KIOTNWo0UO_9ppM_VfxSsPOWBpMING9jynG6CX3Z0w"
            />
            <span className="font-[family-name:var(--font-playfair)] text-[24px] text-primary opacity-70">
              Soulmate Bandhan
            </span>
          </div>
          <p className="mt-2 text-[14px] text-on-surface-variant">
            A premium sanctuary for intentional matchmaking and enduring companionship.
          </p>
        </div>
        <div className="flex flex-col gap-sm">
          <h4 className="mb-1 text-[12px] font-semibold uppercase tracking-widest text-primary">Company</h4>
          <a className="text-[14px] text-on-surface-variant transition-colors hover:text-primary" href="#">
            About Us
          </a>
          <a className="text-[14px] text-on-surface-variant transition-colors hover:text-primary" href="#">
            Success Stories
          </a>
        </div>
        <div className="flex flex-col gap-sm">
          <h4 className="mb-1 text-[12px] font-semibold uppercase tracking-widest text-primary">Support</h4>
          <a className="text-[14px] text-on-surface-variant transition-colors hover:text-primary" href="#">
            Help Center
          </a>
          <a className="text-[14px] text-on-surface-variant transition-colors hover:text-primary" href="#">
            Privacy Policy
          </a>
        </div>
        <div className="flex flex-col gap-sm">
          <h4 className="mb-1 text-[12px] font-semibold uppercase tracking-widest text-primary">Membership</h4>
          <a className="text-[14px] text-on-surface-variant transition-colors hover:text-primary" href="#">
            Join Platinum
          </a>
          <a className="text-[14px] text-on-surface-variant transition-colors hover:text-primary" href="#">
            Verification Process
          </a>
        </div>
      </div>
      <div className="mx-auto mt-lg flex max-w-[1200px] flex-col items-center justify-between gap-2 border-t border-outline-variant/20 px-6 pt-4 text-[12px] font-semibold text-on-tertiary-container md:flex-row">
        <span>© 2024 Soulmate Bandhan. All rights reserved.</span>
        <div className="flex gap-4">
          <span className="cursor-pointer hover:text-primary">English (Global)</span>
        </div>
      </div>
    </footer>
  );
}
