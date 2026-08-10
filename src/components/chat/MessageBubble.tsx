import { cn } from "@/lib/cn";

type MessageBubbleProps = {
  text: string;
  mine?: boolean;
};

export function MessageBubble({ text, mine = false }: MessageBubbleProps) {
  return (
    <div className={cn("flex", mine ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[75%] rounded-2xl px-4 py-3 text-[16px] leading-6 shadow-sm",
          mine ? "bg-primary text-on-primary rounded-br-md" : "bg-surface-container-low text-on-surface rounded-bl-md",
        )}
      >
        {text}
      </div>
    </div>
  );
}
