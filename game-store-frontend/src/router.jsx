import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import AuthPage from "./pages/Auth/AuthPage";
import Layout from "./components/Layout/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/auth",
                element: <AuthPage />
            },
            
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    },
])