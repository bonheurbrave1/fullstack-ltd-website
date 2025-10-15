// App.js
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Components
import LoadingScreen from "./components/LoadingScreen";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Cursor from "./components/Cursor";
import { Helmet } from "react-helmet-async";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Fullstack software development services in Rwanda. Expert web and mobile app development, custom software solutions, and digital transformation services."
        />

        <meta
          property="og:title"
          content="Fullstack - Software Development Rwanda"
        />
        <meta
          property="og:description"
          content="Expert fullstack software development services in Rwanda"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fullstack.rw" />
        <meta
          property="og:image"
          content="https://fullstack.rw"
        />

        <link rel="canonical" href="https://fullstack.rw" />

        <script type="application/ld+json">
          {`
      {
        "@context": "https://fullstack.rw",
        "@type": "SoftwareApplication",
        "name": "Fullstack Software Rwanda",
        "applicationCategory": "SoftwareApplication",
        "operatingSystem": "Web-based",
        "description": "Fullstack software development services in Rwanda",
        "areaServed": "Rwanda",
        "offers": {
          "@type": "Offer",
          "category": "SoftwareDevelopment"
        }
      }
    `}
        </script>
      </Helmet>

      <Router>
        <div className="App bg-white min-h-screen">
          <Cursor variant={cursorVariant} />
          <ScrollToTop />
          <Navigation onCursorChange={setCursorVariant} />

          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={<Home onCursorChange={setCursorVariant} />}
              />
              <Route
                path="/about"
                element={<About onCursorChange={setCursorVariant} />}
              />
              <Route
                path="/services"
                element={<Services onCursorChange={setCursorVariant} />}
              />
              <Route
                path="/portfolio"
                element={<Portfolio onCursorChange={setCursorVariant} />}
              />
              <Route
                path="/contact"
                element={<Contact onCursorChange={setCursorVariant} />}
              />
            </Routes>
          </AnimatePresence>

          <Footer onCursorChange={setCursorVariant} />
        </div>
      </Router>
    </>
  );
}

export default App;
