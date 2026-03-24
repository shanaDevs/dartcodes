import { Metadata } from "next";
import WorkContent from "./work-content";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore our portfolio of successful projects across Fintech, Healthcare, E-commerce, and more.",
};

export default function WorkPage() {
  return <WorkContent />;
}
