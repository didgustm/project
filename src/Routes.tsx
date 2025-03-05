import { lazy, memo } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "@components/templates/Layout";

const MemoLayout = memo(Layout);

/** Effects */
const Effects = lazy(() => import("@pages/Effects"));
const Confetti = lazy(() => import("@pages/Effects/Confetti"));
const Count = lazy(() => import("@pages/Effects/Count"));

/** React Basic */
const Setup = lazy(() => import("@pages/ReactBasic/Setup"));
const Hook = lazy(() => import("@pages/ReactBasic/Hook"));
const Store = lazy(() => import("@pages/ReactBasic/Store"));
const Redux = lazy(() => import("@pages/ReactBasic/Redux"));

/** Works */
const Works = lazy(() => import("@pages/Works"));
const Atgc = lazy(() => import("@pages/Works/Atgc"));
const AdmPlatform = lazy(() => import("@pages/Works/AdmPlatform"));
const CoreVac = lazy(() => import("@pages/Works/Corevac"));

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MemoLayout />,
        children: [
            {
                path: "effects",
                element: <Effects />,
            },
            {
                path: "effects",
                children: [
                    {
                        path: "confetti",
                        element: <Confetti />,
                    },
                    {
                        path: "count",
                        element: <Count />,
                    },
                ],
            },
            {
                path: "react-basic",
                children: [
                    {
                        path: "setup",
                        element: <Setup />,
                    },
                    {
                        path: "hook",
                        element: <Hook />,
                    },
                    {
                        path: "store",
                        element: <Store />,
                    },
                    {
                        path: "redux",
                        element: <Redux />,
                    },
                ],
            },
            {
                path: "works",
                element: <Works />,
            },
            {
                path: "works",
                children: [
                    {
                        path: "atgc",
                        element: <Atgc />,
                    },
                    {
                        path: "adm-platform",
                        element: <AdmPlatform />
                    },
                    {
                        path: "corevac",
                        element: <CoreVac />
                    }
                ],
            },
        ],
    },
]);
