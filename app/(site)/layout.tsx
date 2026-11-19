import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/common/ConsultationModal";
import BackToTop from "@/components/common/BackToTop";
import CustomCursor from "@/components/common/CustomCursor";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import "./homepage/styles/homepage.css";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-layout min-h-screen d-flex flex-column">
      <CustomCursor />
      <Header />
      <main id="main-content" className="flex-grow-1">
        {children}
      </main>
      <Footer />
      <MobileBottomBar />
      <ConsultationModal />
      <BackToTop />
    </div>
  );
}

