import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import LiveChat from "@/components/LiveChat";

import Index from "./pages/Index";
import DS365 from "./pages/DS365";
import AuditPage from "./pages/AuditPage";
import CareerPage from "./pages/CareerPage";
import AwarenessPage from "./pages/AwarenessPage";
import PublicAwarenessPage from "./pages/PublicAwarenessPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ManagersPage from "./pages/ManagersPage";
import BusinessOwnersPage from "./pages/BusinessOwnersPage";
import TeachingPage from "./pages/TeachingPage";
import ParentsPage from "./pages/ParentsPage";
import SeniorsPage from "./pages/SeniorsPage";
import MarketingPage from "./pages/MarketingPage";
import SalesPage from "./pages/SalesPage";
import ContentCreationPage from "./pages/ContentCreationPage";
import EntrepreneursPage from "./pages/EntrepreneursPage";
import DoubtClearancePage from "./pages/DoubtClearancePage";
import CAIOPage from "./pages/CAIOPage";
import WA365Page from "./pages/WA365Page";
import CustomAISoftwarePage from "./pages/CustomAISoftwarePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Scroll restoration component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ds365" element={<DS365 />} />
          <Route path="/audit" element={<AuditPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/awareness" element={<AwarenessPage />} />
          <Route path="/public-awareness" element={<PublicAwarenessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/managers" element={<ManagersPage />} />
          <Route path="/business-owners" element={<BusinessOwnersPage />} />
          <Route path="/teaching" element={<TeachingPage />} />
          <Route path="/parents" element={<ParentsPage />} />
          <Route path="/seniors" element={<SeniorsPage />} />
          <Route path="/marketing" element={<MarketingPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/content-creation" element={<ContentCreationPage />} />
          <Route path="/entrepreneurs" element={<EntrepreneursPage />} />
          <Route path="/doubt-clearance" element={<DoubtClearancePage />} />
          <Route path="/caio" element={<CAIOPage />} />
          <Route path="/wa365" element={<WA365Page />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/custom-ai-software"
            element={<CustomAISoftwarePage />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppFloatingButton
          phoneNumber="+919159007007"
          message="Hello! I'm interested in your AI services."
        />
        <LiveChat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
