import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Technologies from "@/pages/Technologies";
import Credentials from "@/pages/Credentials";
import MediaDownload from "@/pages/MediaDownload";
import Contacts from "@/pages/Contacts";
import NotFound from "@/pages/NotFound";
import ScrollToTop from "@/hooks/scroll-to-top";
import MediaKit from "./pages/Media-Kit";

import Blog from "@/pages/Blog";
import BlogInner from "@/pages/BlogInner";

const queryClient = new QueryClient();


const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/media-kit" element={<MediaKit />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/credentials" element={<Credentials />} />
            <Route path="/media-download" element={<MediaDownload />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogInner />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
