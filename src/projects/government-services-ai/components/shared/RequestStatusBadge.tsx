import { cn } from "@/lib/utils";
import type { RequestStatus } from "@/projects/government-services-ai/utils/types";
import { statusLabels, statusStyles } from "@/projects/government-services-ai/utils/status";

export function RequestStatusBadge({ status }: { status: RequestStatus }) {
  return (
    <span
      className={cn(
        "inline-flex text-[10px] font-semibold px-2.5 py-0.5 rounded-full border",
        statusStyles[status]
      )}
    >
      {statusLabels[status]}
    </span>
  );
}
