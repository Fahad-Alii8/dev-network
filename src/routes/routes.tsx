import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Developers from "../pages/Developers/Developers";
import NotFound from "../components/errors/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/developers",
                element: <Developers />
            }
        ]
        
    },
    {
        path: "*",
        element: <NotFound/>
    }
])

export default router;