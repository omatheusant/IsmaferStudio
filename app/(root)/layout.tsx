import Navbar from "@/components/shared/nav/Navbar";
import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="size-full">
      <Navbar />
      <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-48 max-md:pb-14 sm:px-14">
        <div className="mx-auto w-full max-w-5xl">{children}</div>
      </section>
    </main>
  );
}
