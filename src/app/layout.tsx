import React from "react";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promptia - AI Prompts",
  description: "Save & Show AI Prompt",
};
function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="eng">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
