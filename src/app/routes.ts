import { createBrowserRouter } from "react-router";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Certificates from "./pages/Certificates";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: About,
  },
  {
    path: "/projects",
    Component: Projects,
  },
  {
    path: "/certificates",
    Component: Certificates,
  },
]);