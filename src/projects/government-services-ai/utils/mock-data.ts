import type { ChatMessage, ServiceCategory, ServiceRequest } from "./types";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "permits",
    label: "Permits & Licensing",
    description: "Business licenses, construction permits, and renewals.",
  },
  {
    id: "benefits",
    label: "Benefits & Assistance",
    description: "Social programs, housing support, and emergency aid.",
  },
  {
    id: "records",
    label: "Records & Certificates",
    description: "Vital records, tax documents, and official certificates.",
  },
  {
    id: "transport",
    label: "Transport & Mobility",
    description: "Transit passes, parking, and accessibility services.",
  },
];

export const mockRequests: ServiceRequest[] = [
  {
    id: "REQ-24018",
    title: "Small business license renewal",
    serviceCategory: "Permits & Licensing",
    status: "in_review",
    submittedAt: "2026-05-12T09:14:00Z",
    updatedAt: "2026-05-14T11:02:00Z",
    summary: "Renewal for retail storefront — documents uploaded, awaiting reviewer.",
    applicantName: "Maria Chen",
  },
  {
    id: "REQ-24009",
    title: "Childcare subsidy eligibility",
    serviceCategory: "Benefits & Assistance",
    status: "needs_info",
    submittedAt: "2026-05-08T14:30:00Z",
    updatedAt: "2026-05-13T16:45:00Z",
    summary: "Additional income verification requested before determination.",
    applicantName: "James Okonkwo",
  },
  {
    id: "REQ-23981",
    title: "Birth certificate copy request",
    serviceCategory: "Records & Certificates",
    status: "approved",
    submittedAt: "2026-05-02T10:00:00Z",
    updatedAt: "2026-05-10T08:20:00Z",
    summary: "Approved — digital copy available for download.",
    applicantName: "Aisha Rahman",
  },
  {
    id: "REQ-23955",
    title: "Accessible transit pass",
    serviceCategory: "Transport & Mobility",
    status: "completed",
    submittedAt: "2026-04-28T11:15:00Z",
    updatedAt: "2026-05-05T09:00:00Z",
    summary: "Pass issued and mailed to registered address.",
    applicantName: "David Kim",
  },
];

export const initialAssistantMessages: ChatMessage[] = [
  {
    id: "welcome",
    role: "assistant",
    content:
      "Hello — I'm your Government Services assistant. I can help you find programs, check eligibility, and prepare a service request. What do you need help with today?",
    timestamp: new Date().toISOString(),
  },
];

export const dashboardStats = {
  openRequests: 1284,
  avgResponseHours: 18,
  completionRate: 94,
  activeReviewers: 42,
};
