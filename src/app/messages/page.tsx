import { Paperclip, Search, Send, Smile } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { MessageBubble } from "@/components/chat/MessageBubble";

const chats = [
  { name: "Aisha Sharma", time: "Just now", preview: "I completely agree. Family values are very important to me too.", active: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyuPt7BQILoL0Y3WOWQi1aYu2-kkF9FvZ2V2YqQjo1O-Kg1_wUUZdIPnyWFRu8yDe_FZy1Zs3IVyjswK2Dpd4zs0cy1zyNzNHuZ-iIPBJGoPMmwYrP1PnijZBZMKZqaVeIZ9WIm_oAMEoIrn-UG1RJyKbE_rVSyOxL0EeZYEGI65H6COIaUz_0CF_eo1xKHf4ahVo-KQHNyL7RjdO_EfuAzx-AM6f00SXKe4jDtBRbAc8nsEaITDkePA" },
  { name: "Rohan Desai", time: "10:42 AM", preview: "Would you be open to a video call this weekend?", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXSeOL4wxk04GG72GJxedEUj2vBUDnKMoglq03YcYZ91P2KRBrztI4d4L177Me8srtHABAiMzRj05Uf1hccpYU8r54MVhUXiqo_YaOIMgCJrZ6p_rCsCMCVAr9bTz0jhx6wTsJFglgSOl_frp9Gu_ymoyHvTNGwXEXau23at8X1BiSpyv-HqQ5vKvJpEU0tE2wAxlB-DLMs0OA8HFq8CnK4uNNhPZuWtOPkIj4_CVufM6sVrVqMpns1A" },
  { name: "Priya Patel", time: "Yesterday", preview: "Thank you for sharing your profile. I read through...", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCw08H-4gyL0OYS6yfX1uDnpSDkws2hb7kipyiYDKhNQrKBsEebcxxpRR0xNXLTLdyZDMQzA7zxDrQ47S-n5boPVt5OVaJTGRao7yV1Alnqd1TvaXnYdzr3s2YeqAgoBAQg8XjUpVUviGWABfyWa8k2cNcHUytmnZGu68WLsDKkkat2WbRCk1HgmdPWhB2YoL06nNPc1CzHD-4X8sXIHciUgR14gVl7QupPEFhXQkIFuBZ3H0ox8Cp8NA" },
];

export default function MessagesPage() {
  return (
    <>
      <Navbar active="messages" />
      <main className="min-h-screen bg-surface pt-20">
        <div className="mx-auto flex h-[calc(100vh-80px)] max-w-[1200px] gap-4 px-6 py-4">
          <aside className="hidden w-1/3 shrink-0 overflow-hidden rounded-xl bg-surface-container-lowest shadow-md md:flex md:flex-col">
            <div className="sticky top-0 z-10 flex flex-col gap-3 bg-surface-container-lowest p-4">
              <h2 className="font-[family-name:var(--font-playfair)] text-[24px] text-on-surface">Messages</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant/50" />
                <input className="w-full rounded-lg bg-surface-container-low py-3 pl-10 pr-3 text-[14px]" placeholder="Search conversations..." />
              </div>
              <div className="flex gap-2">
                <Badge className="bg-primary text-on-primary">All</Badge>
                <Badge className="bg-surface-container-high text-on-surface-variant">Unread (2)</Badge>
                <Badge className="bg-surface-container-high text-on-surface-variant">Premium</Badge>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {chats.map((chat) => (
                <button
                  key={chat.name}
                  className={`flex w-full items-center gap-4 p-4 text-left transition-colors ${chat.active ? "bg-surface-container-low" : "hover:bg-surface-container"}`}
                >
                  <div className="relative shrink-0">
                    <Avatar src={chat.image} alt={chat.name} size="md" />
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-surface-container-lowest bg-green-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="truncate text-[16px] font-semibold text-on-surface">{chat.name}</span>
                      <span className="shrink-0 text-[12px] font-semibold uppercase tracking-wider text-primary">{chat.time}</span>
                    </div>
                    <p className="truncate text-[14px] text-on-surface-variant">{chat.preview}</p>
                  </div>
                </button>
              ))}
            </div>
          </aside>
          <section className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-md">
            <div className="flex items-center justify-between border-b border-surface-variant p-4">
              <div className="flex items-center gap-3">
                <Avatar src={chats[0].image} alt={chats[0].name} size="md" />
                <div>
                  <h1 className="font-[family-name:var(--font-playfair)] text-[24px] text-on-surface">{chats[0].name}</h1>
                  <p className="text-[14px] text-on-surface-variant">Online now</p>
                </div>
              </div>
              <Badge className="bg-secondary-fixed text-on-secondary-fixed">Verified</Badge>
            </div>
            <div className="flex-1 space-y-4 overflow-y-auto bg-surface p-6">
              <MessageBubble text="Hello, thank you for connecting." />
              <MessageBubble mine text="Thanks for reaching out. I loved reading your profile." />
              <MessageBubble text="Would you like to talk this weekend?" />
            </div>
            <div className="border-t border-surface-variant bg-surface-container-lowest p-4">
              <div className="flex items-center gap-3 rounded-full bg-surface-container-low px-4 py-3">
                <Paperclip className="h-5 w-5 text-on-surface-variant" />
                <Smile className="h-5 w-5 text-on-surface-variant" />
                <input className="min-w-0 flex-1 bg-transparent text-[16px] outline-none placeholder:text-on-surface-variant" placeholder="Type a message..." />
                <button className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-on-primary">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
