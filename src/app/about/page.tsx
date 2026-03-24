import { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about DartCodes, our mission, values, and the team driving digital innovation.",
};

export default function AboutPage() {
  return <AboutContent />;
}
