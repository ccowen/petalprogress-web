import { createBrowserRouter, Navigate } from "react-router";
import { MarketingLayout } from "./layout/MarketingLayout";
import { HomePage } from "./pages/HomePage";
import { JournalPage } from "./pages/JournalPage";
import { TextsPage } from "./pages/TextsPage";
import { NextPage } from "./pages/NextPage";
import { PhilosophyPage } from "./pages/PhilosophyPage";
import { MandalaTypesPage } from "./pages/MandalaTypesPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { ScanPage } from "./pages/ScanPage";
import { OnlinePage } from "./pages/OnlinePage";

export const router = createBrowserRouter([
  // /scan is printed on physical products. Deliberately outside
  // MarketingLayout: /scan is its own menu, and /online is a focused
  // page — site nav would only invite people to wander off.
  { path: "scan", element: <ScanPage /> },
  { path: "online", element: <OnlinePage /> },
  {
    element: <MarketingLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "journal", element: <JournalPage /> },
      { path: "texts", element: <TextsPage /> },
      { path: "daily", element: <Navigate to="/texts" replace /> },
      { path: "philosophy", element: <PhilosophyPage /> },
      // Future plans (the original homepage), linked from the footer only
      { path: "next", element: <NextPage /> },
      { path: "app", element: <Navigate to="/next" replace /> },
      { path: "mandala-types", element: <MandalaTypesPage /> },
      // Shop folded into /journal while the journal is the only product
      { path: "shop", element: <Navigate to="/journal#buy" replace /> },
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
