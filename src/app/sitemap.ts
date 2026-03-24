import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/work",
    "/careers",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/work/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Services are currently on the services page, but if they had individual pages:
  // const serviceRoutes = services.map((service) => ({
  //   url: `${siteConfig.url}/services/${service.id}`,
  //   lastModified: new Date(),
  //   changeFrequency: 'monthly',
  //   priority: 0.6,
  // }));

  return [...routes, ...projectRoutes];
}
