type AuthHeaderProps = {
  title: string;
  subtitle: string;
  logo?: boolean;
};

export function AuthHeader({ title, subtitle, logo = false }: AuthHeaderProps) {
  return (
    <div className="mb-10 flex flex-col items-center text-center">
      {logo ? (
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa9MICkmv6ho6hKvTEYbF_Gg96_ow68otNqmDY6qL1K-kJrjxk_7Vghhvvl6f9SEbba4DBZ1TQHpZYdJpNbYsWdaPgp94UwkKu7O_riBHFNnNzkEBLoVpdEIRr5M2p2W5pMNX_BCUk-cz1kz6EgxHMIn0Gfa8TpldhN33YPut2Yz72XkSGYWXj6h1UJ0fFtC762KB0NegMnT3-KIOTNWo0UO_9ppM_VfxSsPOWBpMING9jynG6CX3Z0w"
          alt="Soulmate Bandhan Logo"
          className="mb-4 h-32 w-32 rounded-xl object-contain shadow-sm"
        />
      ) : null}
      <h1 className="font-[family-name:var(--font-playfair)] text-[32px] font-bold leading-10 tracking-tight text-primary md:text-[32px]">
        {title}
      </h1>
      <p className="mt-2 text-[18px] leading-7 text-on-surface-variant">{subtitle}</p>
    </div>
  );
}
