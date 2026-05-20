/** Base path for the Government Services AI prototype entry */
export const GSAI_PROJECT_PATH = "/projects/government-services-ai";

/** App routes (prototype demo) */
export const gsaiRoutes = {
  project: GSAI_PROJECT_PATH,
  login: "/login",
  dashboard: "/dashboard",
  assistant: "/assistant",
  admin: "/admin",
  review: "/review",
  submit: "/submit",
  result: "/result",
} as const;

export type GSAIRouteKey = keyof typeof gsaiRoutes;

/** Paths that use the GSAI app shell instead of the main marketing site chrome */
export const GSAI_APP_PATHS = [
  gsaiRoutes.login,
  gsaiRoutes.dashboard,
  gsaiRoutes.assistant,
  gsaiRoutes.admin,
  gsaiRoutes.review,
  gsaiRoutes.submit,
  gsaiRoutes.result,
] as const;

export function isGsaiAppPath(pathname: string): boolean {
  return GSAI_APP_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
}

export function isGsaiProjectPath(pathname: string): boolean {
  return (
    pathname === GSAI_PROJECT_PATH ||
    pathname.startsWith(`${GSAI_PROJECT_PATH}/`)
  );
}
