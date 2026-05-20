import type { RequestStatus } from "./types";

export const statusLabels: Record<RequestStatus, string> = {
  draft: "Draft",
  submitted: "Submitted",
  in_review: "In review",
  approved: "Approved",
  needs_info: "Needs information",
  completed: "Completed",
};

export const statusStyles: Record<RequestStatus, string> = {
  draft: "bg-slate-100 text-slate-700 border-slate-200",
  submitted: "bg-blue-50 text-blue-800 border-blue-200",
  in_review: "bg-amber-50 text-amber-800 border-amber-200",
  approved: "bg-emerald-50 text-emerald-800 border-emerald-200",
  needs_info: "bg-orange-50 text-orange-800 border-orange-200",
  completed: "bg-teal-50 text-teal-800 border-teal-200",
};
