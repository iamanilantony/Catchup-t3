import type { Metadata } from "next";
import "../styles/globals.css";
import HeadSEO from "../components/HeadSEO";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <HeadSEO />
      <body>
        <div className="min-h-screen flex flex-col justify-center text-white items-center bg-black">
          {children}
        </div>
      </body>
    </html>
  );
}