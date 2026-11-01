import { createBrowserRouter, Navigate } from "react-router";
import { MarketingLayout } from "./layout/MarketingLayout";
import { HomePage } from "./pages/HomePage";
import { JournalPage } from "./pages/JournalPage";
import { TextsPage } from "./pages/TextsPage";
import { PhilosophyPage } from "./pages/PhilosophyPage";
import { MandalaTypesPage } from "./pages/MandalaTypesPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { LinkHubPage } from "./pages/LinkHubPage";
import { OnlinePage } from "./pages/OnlinePage";

export const router = createBrowserRouter([
  // /link-hub is the QR-code destination for physical products.
  // Deliberately outside MarketingLayout: /link-hub is its own menu, and
  // /online is a focused page — site nav would only invite people to
  // wander off.
  { path: "link-hub", element: <LinkHubPage /> },
  // Old hub URL, kept so any QR codes already printed with it still work
  { path: "scan", element: <Navigate to="/link-hub" replace /> },
  { path: "online", element: <OnlinePage /> },
  {
    element: <MarketingLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "journal", element: <JournalPage /> },
      { path: "texts", element: <TextsPage /> },
      { path: "daily", element: <Navigate to="/texts" replace /> },
      { path: "philosophy", element: <PhilosophyPage /> },
      // The "What's next" page is hidden (RESTORE_LATER.md section 11); mandala types covers it for now
      { path: "next", element: <Navigate to="/mandala-types" replace /> },
      { path: "app", element: <Navigate to="/mandala-types" replace /> },
      { path: "mandala-types", element: <MandalaTypesPage /> },
      // Shop folded into /journal while the journal is the only product
      { path: "shop", element: <Navigate to="/journal" replace /> },
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
