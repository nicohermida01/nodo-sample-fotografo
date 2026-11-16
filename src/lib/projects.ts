import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/** Published projects, newest first. */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects', ({ data }) => !data.draft);
  return projects.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const projectUrl = (project: Project): string => `/trabajos/${project.data.slug}`;

export const coverTransitionName = (project: Project): string => `cover-${project.data.slug}`;
