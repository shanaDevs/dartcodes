import { Metadata } from "next";
import { Suspense } from "react";
import ServicesContent from "./services-content";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our comprehensive digital services including Web Development, Mobile Apps, UI/UX Design, and Enterprise Solutions.",
};

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ServicesContent />
    </Suspense>
  );
}
