import type { Project } from "@/content/projects";
import { themes } from "@/content/themes";

export function getProjectSearchText(project: Project): string {
  const themeTitles = project.themes
    .map((id) => themes.find((t) => t.id === id)?.title ?? "")
    .filter(Boolean);

  return [
    project.title,
    project.description,
    project.building,
    project.deploymentContext,
    project.systemType,
    project.targetUsers,
    ...project.technologies,
    ...project.tags,
    ...themeTitles,
    ...project.stages,
    ...project.status,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function projectMatchesSearch(project: Project, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return getProjectSearchText(project).includes(q);
}
