import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-full min-h-screen overflow-x-hidden text-text flex flex-col">
      <Header />
      <Sidebar />
      {/* keyed by route so the entrance reveal re-orchestrates on navigation */}
      <main key={pathname} className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
