import { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import CaseStudyContent from "./case-study-content";

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        id: study.id,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const study = caseStudies.find((s) => s.id === id);

    if (!study) {
        return { title: "Not Found" };
    }

    return {
        title: `${study.title} | Case Study`,
        description: study.description,
        openGraph: {
            images: [study.image],
        },
    };
}

export default async function CaseStudyPage({ params }: Props) {
    const { id } = await params;
    const study = caseStudies.find((s) => s.id === id);

    if (!study) {
        notFound();
    }

    return <CaseStudyContent study={study} />;
}
