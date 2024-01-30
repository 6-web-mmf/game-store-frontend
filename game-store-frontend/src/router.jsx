import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import AuthPage from "./pages/Auth/AuthPage";
import Layout from "./components/Layout/Layout";
import Game from "./pages/Game/Game";

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
            {
                path: "/game/:gameId",
                element: <Game />
            }

        ]
    },

])