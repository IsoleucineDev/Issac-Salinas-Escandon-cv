import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { Certifications } from "./pages/Certifications";
import { Experience } from "./pages/Experience";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "portfolio", Component: Portfolio },
      { path: "certificaciones", Component: Certifications },
      { path: "experiencia", Component: Experience },
      { path: "contacto", Component: Contact },
    ],
  },
]);
