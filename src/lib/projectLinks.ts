import type { Project } from "@/content/projects";
import type { ProjectLinkType } from "@/content/types";

export const PROJECT_LINK_LABELS: Record<ProjectLinkType, string> = {
  live: "Launch Application",
  platform: "Launch Platform",
  application: "Open Application",
  figma: "View Design",
  system: "Access System",
  landing: "Explore Platform",
  github: "View on GitHub",
};

/** Resolve configured URLs (http(s) absolute, or site-relative paths). */
export function resolveProjectUrl(url: string): string {
  if (/^https?:\/\//i.test(url)) {
    return url;
  }
  // Keep relative paths relative so SSR and client hrefs match (avoids hydration errors).
  return url.startsWith("/") ? url : `/${url}`;
}

export function getProjectLinkLabel(project: Project): string {
  if (project.linkLabel) {
    return project.linkLabel;
  }
  return PROJECT_LINK_LABELS[project.linkType];
}

export function projectOpensInNewTab(project: Project): boolean {
  return project.openInNewTab !== false;
}

export function getProjectAriaLabel(project: Project): string {
  const action = getProjectLinkLabel(project);
  const destination = projectOpensInNewTab(project) ? "opens in a new tab" : "";
  return `${project.title}: ${action}${destination ? ` (${destination})` : ""}`;
}
