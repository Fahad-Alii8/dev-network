import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Developers from "../pages/developers/Developers";
import Jobs from "../pages/jobs/Jobs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "home",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/jobs",
                element: <Jobs />
            },
            {
                path: "/developers",
                element: <Developers />
            }
        ]
    }
]);

export default router;