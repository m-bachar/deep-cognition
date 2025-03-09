import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from "react-router-dom";


// Pages
import Acceuil from "./pages/Acceuil";
import Solutions from "./pages/Solutions";
import Actualites from "./pages/Actualites";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Layout */}
          <Route element={<Layout />}>

            {/* Public Routes */}
            <Route path="/" element={<Acceuil />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/contact" element={<Contact />} />

          </Route>

          {/* 404 Routes */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
