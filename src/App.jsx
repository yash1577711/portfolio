import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Background3D from "./components/Background3D";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Education = lazy(() => import("./pages/Education"));
const Experience = lazy(() => import("./pages/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const pageMeta = {
  "/": {
    title: "Yash Kumar - Full-Stack & Backend Developer | Python, Django, SQL",
    description:
      "Portfolio of Yash Kumar, a full-stack and backend developer in Delhi with hands-on experience building production-grade web applications.",
  },
  "/about": {
    title: "About - Yash Kumar",
    description:
      "Learn about Yash Kumar, a Backend Developer focused on Python, Django, PostgreSQL, and production-grade web application delivery.",
  },
  "/projects": {
    title: "Projects - Yash Kumar",
    description:
      "Explore key full-stack projects built by Yash Kumar using Django, Bootstrap, PostgreSQL, and clean MVC architecture.",
  },
  "/skills": {
    title: "Skills - Yash Kumar",
    description:
      "Technical skills of Yash Kumar including Python, Django, SQL, REST APIs, Git, and backend-focused full-stack development.",
  },
  "/experience": {
    title: "Experience - Yash Kumar",
    description:
      "Professional experience of Yash Kumar across freelance full-stack delivery and internship work with Django and MERN.",
  },
  "/education": {
    title: "Education - Yash Kumar",
    description:
      "Education background of Yash Kumar, Diploma in Artificial Intelligence and Machine Learning (Expected June 2026).",
  },
  "/certificates": {
    title: "Certificates - Yash Kumar",
    description:
      "Certifications and achievements of Yash Kumar, including Python Advanced, Generative AI, and IR4.0 technologies.",
  },
  "/contact": {
    title: "Contact - Yash Kumar | Full-Stack Developer",
    description:
      "Get in touch with Yash Kumar for full-time or internship opportunities in backend and full-stack web development.",
  },
};

function SEOUpdater() {
  const location = useLocation();

  useEffect(() => {
    const configuredSiteUrl = import.meta.env.VITE_SITE_URL
      ? import.meta.env.VITE_SITE_URL.replace(/\/+$/, "")
      : "";
    const origin = configuredSiteUrl || window.location.origin;
    const absoluteUrl = `${origin}${location.pathname}`;

    const meta = pageMeta[location.pathname] || {
      title: "Yash Kumar - Full-Stack & Backend Developer",
      description:
        "Portfolio of Yash Kumar, Backend Developer specializing in Python, Django, SQL, and full-stack web development.",
    };

    document.title = meta.title;

    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", absoluteUrl);

    const twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute("content", absoluteUrl);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", absoluteUrl);
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <SEOUpdater />
      <div className="min-h-screen flex flex-col">
        <Background3D />
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
