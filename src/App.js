import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import Certificates from "./pages/Certificates";
import Hero from "./pages/Hero";
import {
  BrowserRouter as Router,
  Route,
  Outlet,
  Routes,
} from "react-router-dom";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
