"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { mockRequests } from "@/projects/government-services-ai/utils/mock-data";
import type { RequestStatus, ServiceRequest } from "@/projects/government-services-ai/utils/types";

interface DraftRequest {
  categoryId: string;
  categoryLabel: string;
  title: string;
  description: string;
}

interface RequestContextValue {
  requests: ServiceRequest[];
  draft: DraftRequest | null;
  lastSubmittedId: string | null;
  setDraft: (draft: DraftRequest | null) => void;
  submitDraft: () => string | null;
  updateRequestStatus: (id: string, status: RequestStatus) => void;
}

const RequestContext = createContext<RequestContextValue | null>(null);

export function RequestProvider({ children }: { children: ReactNode }) {
  const [requests, setRequests] = useState<ServiceRequest[]>(mockRequests);
  const [draft, setDraft] = useState<DraftRequest | null>(null);
  const [lastSubmittedId, setLastSubmittedId] = useState<string | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("gsai.requests");
    if (!saved) return;
    try {
      setRequests(JSON.parse(saved) as ServiceRequest[]);
    } catch {
      window.localStorage.removeItem("gsai.requests");
    }
  }, []);

  const submitDraft = useCallback(() => {
    if (!draft?.title || !draft.description) return null;

    const id = `REQ-${Math.floor(24000 + Math.random() * 999)}`;
    const now = new Date().toISOString();
    const newRequest: ServiceRequest = {
      id,
      title: draft.title,
      serviceCategory: draft.categoryLabel,
      status: "submitted",
      submittedAt: now,
      updatedAt: now,
      summary: draft.description,
      applicantName: "You",
    };

    setRequests((prev) => [newRequest, ...prev]);
    setLastSubmittedId(id);
    setDraft(null);
    return id;
  }, [draft]);

  const updateRequestStatus = useCallback((id: string, status: RequestStatus) => {
    setRequests((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, status, updatedAt: new Date().toISOString() } : r
      )
    );
  }, []);

  useEffect(() => {
    window.localStorage.setItem("gsai.requests", JSON.stringify(requests));
  }, [requests]);

  const value = useMemo(
    () => ({
      requests,
      draft,
      lastSubmittedId,
      setDraft,
      submitDraft,
      updateRequestStatus,
    }),
    [requests, draft, lastSubmittedId, submitDraft, updateRequestStatus]
  );

  return (
    <RequestContext.Provider value={value}>{children}</RequestContext.Provider>
  );
}

export function useRequests() {
  const ctx = useContext(RequestContext);
  if (!ctx) {
    throw new Error("useRequests must be used within RequestProvider");
  }
  return ctx;
}
