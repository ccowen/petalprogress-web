import { createBrowserRouter, Navigate } from "react-router";
import { MarketingLayout } from "./layout/MarketingLayout";
import { HomePage } from "./pages/HomePage";
import { PhilosophyPage } from "./pages/PhilosophyPage";
import { MandalaTypesPage } from "./pages/MandalaTypesPage";
import { ShopPage } from "./pages/ShopPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";

export const router = createBrowserRouter([
  {
    element: <MarketingLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "philosophy", element: <PhilosophyPage /> },
      { path: "mandala-types", element: <MandalaTypesPage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "pricing", element: <Navigate to="/" replace /> },
      { path: "teams", element: <Navigate to="/" replace /> },
      { path: "login", element: <Navigate to="/" replace /> },
      { path: "signup", element: <Navigate to="/" replace /> },
      { path: "signup/intent", element: <Navigate to="/" replace /> },
      { path: "onboarding", element: <Navigate to="/" replace /> },
      { path: "contact", element: <Navigate to="/" replace /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
    ],
  },
]);
