import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";

import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Team from "./pages/Teams/team";
import Services from "./pages/OurServices/services";
import Insights from "./pages/Insights/insights";
import InsightDetails from "./pages/Insights/insightDetails";
import WorkingSpace from "./pages/WorkingSpace/work";
import Contact from "./pages/Contact/contact";

import SMEManager from "./SMEManager/index";
import PilotApplication from "./PilotApplication/index";
import AdminLogin from "./pages/AdminLogin/index";
import AdminDashboard from "./pages/AdminDashboard/index";

function AppContent() {
  const location = useLocation();

  // Hide public navigation and footer on admin pages.
  const isAdminPage = location.pathname.startsWith(
    "/sme-manager/admin"
  );

  return (
    <>
      <ScrollToTop />

      {!isAdminPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/insights" element={<Insights />} />
        <Route
          path="/insights/:slug"
          element={<InsightDetails />}
        />
        <Route
          path="/co-working-space"
          element={<WorkingSpace />}
        />
        <Route path="/contact" element={<Contact />} />

        {/* SME Manager */}
        <Route
          path="/sme-manager"
          element={<SMEManager />}
        />
        <Route
          path="/sme-manager/apply"
          element={<PilotApplication />}
        />

        {/* SME Manager Admin */}
        <Route
          path="/sme-manager/admin/login"
          element={<AdminLogin />}
        />

        <Route
          path="/sme-manager/admin"
          element={<AdminDashboard />}
        />
      </Routes>

      {!isAdminPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
