import { Routes, Route } from "react-router-dom";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AllProjects from "./components/AllProjects";
import AllCertifications from "./components/AllCertifications";
import Footer from "./components/Footer";
import { useLenis } from "./hooks/useLenis";

export default function App() {
  useLenis();

  return (
    <div className="min-h-screen bg-cream-100 dark:bg-ink-950 transition-colors duration-500">
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/certifications" element={<AllCertifications />} />
      </Routes>
      <Footer />
    </div>
  );
}
