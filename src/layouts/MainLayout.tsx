import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Header />
      <Breadcrumbs />
      <main className="flex-1 focus:outline-none" id="main-content" role="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}