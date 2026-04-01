import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Capabilities from "@/pages/capabilities";
import Solutions from "@/pages/solutions";
import Sectors from "@/pages/sectors";
import FundingPartnerships from "@/pages/funding-partnerships";
import Insights from "@/pages/insights";
import Contact from "@/pages/contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/capabilities" component={Capabilities} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/sectors" component={Sectors} />
          <Route path="/funding-partnerships" component={FundingPartnerships} />
          <Route path="/insights" component={Insights} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
