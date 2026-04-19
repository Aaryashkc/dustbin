import React, { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/Sidebar";
import Topbar from "../dashboard/Topbar";
import { DashboardThemeProvider } from "../../context/DashboardThemeProvider";
import { useDashboardTheme } from "../../hooks/useDashboardTheme";

function DashboardLayoutInner() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme } = useDashboardTheme();

  const handleMenuToggle = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <div
      className={`admin-dashboard-root min-h-screen bg-[var(--dash-page)] transition-colors duration-300 ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      <Topbar onMenuToggle={handleMenuToggle} />
      <Sidebar mobileOpen={mobileOpen} onClose={handleClose} />

      <main className="pt-16 md:pl-64 min-h-screen transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

const DashboardLayout = () => (
  <DashboardThemeProvider>
    <DashboardLayoutInner />
  </DashboardThemeProvider>
);

export default DashboardLayout;
