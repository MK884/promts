import React from "react";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Nav, Provider } from "@/components";

export const metadata: Metadata = {
  title: "Promptia - AI Prompts",
  description: "Save & Show AI Prompt",
};
function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="eng">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
