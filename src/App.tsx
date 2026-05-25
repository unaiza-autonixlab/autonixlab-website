import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Preloader from "./components/Preloader";

import Index from "./pages/Index";
import CaseStudy from "./pages/CaseStudy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {loading && (
          <Preloader onComplete={() => setLoading(false)} />
        )}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/case-study/:slug" element={<CaseStudy />} />
            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
