import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soulmate Bandhan",
  description: "Soulmate Bandhan registration and login screens",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
         <Toaster 
         position="top-right"
  toastOptions={{
    classNames: {
      toast:
        "w-[380px] !rounded-xl !p-4 !text-base !font-medium !shadow-lg",
      success:
        "!bg-green-600 !text-white !border-green-700",
      error:
        "!bg-red-600 !text-white !border-red-700",
    },
  }}
         />
      </body>
       

    </html>
  );
}
