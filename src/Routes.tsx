import { lazy, memo } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "@components/templates/Layout";

const MemoLayout = memo(Layout);
const Main = lazy(() => import("@pages/Main"));
/** Effects */
const Effects = lazy(() => import("@pages/Effects"));
const Confetti = lazy(() => import("@pages/Effects/Confetti"));
const Count = lazy(() => import("@pages/Effects/Count"));
const SmoothScroll = lazy(() => import("@pages/Effects/Scroll"));
const Graph = lazy(() => import("@pages/Effects/Graph"));

/** React Basic */
const Setup = lazy(() => import("@pages/ReactBasic/Setup"));
const Hook = lazy(() => import("@pages/ReactBasic/Hook"));
const Store = lazy(() => import("@pages/ReactBasic/Store"));
const Redux = lazy(() => import("@pages/ReactBasic/Redux"));

/** Intro */
const About =  lazy(() => import("@components/pages/About"));

/**
 * Works
 * Projects
 */
const Works = lazy(() => import("@pages/Works"));
const Atgc = lazy(() => import("@pages/Works/Projects/Atgc"));
const AdmPlatform = lazy(() => import("@pages/Works/Projects/AdmPlatform"));
const CoreVac = lazy(() => import("@pages/Works/Projects/Corevac"));
const Airclean = lazy(() => import("@pages/Works/Projects/Airclean"));
const KBDesignSystem = lazy(() => import("@pages/Works/Projects/KBDesignSystem"));
const FHDealer  = lazy(() => import("@pages/Works/Projects/FasthunterDealer"));
const Fasthunter = lazy(() => import("@pages/Works/Projects/Fasthunter"));
/** Works > Landing */
const RefinanceLoan = lazy(() => import("@pages/Works/Landings/RefinanceLoan"));
const LoanComparisonCredit = lazy(() => import("@pages/Works/Landings/LoanComparisonCredit"));
const AptManagementFee = lazy(() => import("@pages/Works/Landings/AptManagementFee"));
const Safebox = lazy(() => import("@pages/Works/Landings/Safebox"));
const Fund = lazy(() => import("@pages/Works/Landings/Fund"));
const Withdrawal = lazy(() => import("@pages/Works/Landings/Withdrawal"));
const HeartDelivery = lazy(() => import("@pages/Works/Landings/HeartDelivery"));
const Ddokgu = lazy(() => import("@pages/Works/Landings/Ddokgu"));

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MemoLayout />,
        children: [
            {
                path: "",
                element: <Main />
            },
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
                    {
                        path: "scroll",
                        element: <SmoothScroll />
                    },
                    {
                        path: "graph",
                        element: <Graph />
                    }
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
                        path: "design-system",
                        element: <KBDesignSystem />
                    },
                    {
                        path: "corevac",
                        element: <CoreVac />
                    },
                    {
                        path: "airclean",
                        element: <Airclean />
                    },
                    {
                        path: "fhdealer",
                        element: <FHDealer />
                    },
                    {
                        path: "fasthunter",
                        element: <Fasthunter />
                    },
                    {
                        path: "refinanceLoan",
                        element: <RefinanceLoan />
                    },
                    {
                        path: "loanComparisonCredit",
                        element: <LoanComparisonCredit />
                    },
                    {
                        path: "aptManagementFee",
                        element: <AptManagementFee />
                    },
                    {
                        path: "safebox",
                        element: <Safebox />
                    },
                    {
                        path: "fund",
                        element: <Fund />
                    },
                    {
                        path: "withdrawal",
                        element: <Withdrawal />
                    },
                    {
                        path: "heartDelivery",
                        element: <HeartDelivery />
                    },
                    {
                        path: "ddokgu",
                        element: <Ddokgu />
                    }
                ],
            },
            {
                path: "about",
                element: <About />
            }
        ],
    },
]);
