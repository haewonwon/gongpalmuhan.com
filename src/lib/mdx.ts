import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { projects, type Project } from "@/data/projects";
import type { Locale } from "@/i18n/config";

const contentDirectory = path.join(process.cwd(), "src/content");

export type ContentCollection = "posts" | "projects";

export type MdxDocument<TData = Record<string, unknown>> = {
  data: TData;
  source: string;
};

export async function getMdxDocument<TData = Record<string, unknown>>(
  collection: ContentCollection,
  locale: Locale,
  slug: string,
): Promise<MdxDocument<TData> | null> {
  const filePath = path.join(contentDirectory, collection, locale, `${slug}.mdx`);

  try {
    const file = await fs.readFile(filePath, "utf8");
    const { content, data } = matter(file);

    return {
      data: data as TData,
      source: content,
    };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return null;
    }

    throw error;
  }
}

export type ProjectMdx = {
  project: Project;
  source: string;
};

export async function getProjectMdx(slug: string, locale: Locale): Promise<ProjectMdx | null> {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return null;
  }

  const document = await getMdxDocument("projects", locale, slug);

  if (!document) {
    return null;
  }

  return {
    project,
    source: document.source,
  };
}
