import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { AppSidebar } from "./components/app-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="container mx-auto px-4 lg:pg-0">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
