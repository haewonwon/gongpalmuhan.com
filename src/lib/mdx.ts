import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { projects, type Project } from "@/data/projects";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export type ProjectMdx = {
  project: Project;
  source: string;
};

export async function getProjectMdx(slug: string): Promise<ProjectMdx | null> {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return null;
  }

  const filePath = path.join(projectsDirectory, `${slug}.mdx`);
  const file = await fs.readFile(filePath, "utf8");
  const { content } = matter(file);

  return {
    project,
    source: content,
  };
}
