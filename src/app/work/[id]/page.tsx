import { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectContent from "./project-content";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      images: [project.image],
    },
  };
}

export default function ProjectPage() {
  return <ProjectContent />;
}
