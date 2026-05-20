export type UserRole = "citizen" | "reviewer" | "admin";

export interface GSAIUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organization?: string;
}

export type RequestStatus =
  | "draft"
  | "submitted"
  | "in_review"
  | "approved"
  | "needs_info"
  | "completed";

export interface ServiceRequest {
  id: string;
  title: string;
  serviceCategory: string;
  status: RequestStatus;
  submittedAt?: string;
  updatedAt: string;
  summary: string;
  applicantName: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface ServiceCategory {
  id: string;
  label: string;
  description: string;
}
