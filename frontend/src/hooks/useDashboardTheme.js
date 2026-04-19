import { useContext } from "react";
import { DashboardThemeContext } from "../context/dashboardThemeContext";

export function useDashboardTheme() {
  const ctx = useContext(DashboardThemeContext);
  if (ctx === undefined) {
    throw new Error(
      "useDashboardTheme must be used within DashboardThemeProvider"
    );
  }
  return ctx;
}
