import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";
import Home from "./pages/Home/home"
import About from "./pages/About/about"
import Services from "./pages/OurServices/services";
import Insights from "./pages/Insights/insights";


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;