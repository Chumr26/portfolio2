import { createHashRouter } from "react-router";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Certificates from "./pages/Certificates";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

export const router = createHashRouter(
  [
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
  ],
  { basename }
);