import ResultView from "@/projects/government-services-ai/views/ResultView";
import { AppProviders } from "@/projects/government-services-ai/components/layout/AppProviders";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <AppProviders>
      <ResultView />
    </AppProviders>
  );
}
