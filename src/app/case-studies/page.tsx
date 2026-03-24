import { Metadata } from "next";
import CaseStudiesContent from "./case-studies-content";

export const metadata: Metadata = {
    title: "Case Studies | DartCodes",
    description:
        "Explore how we helped businesses worldwide succeed through powerful websites, apps, and marketing. Real stories, real results.",
};

export default function CaseStudiesPage() {
    return <CaseStudiesContent />;
}
