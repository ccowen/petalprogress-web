import { createBrowserRouter } from "react-router";
import { MarketingLayout } from "./layout/MarketingLayout";
import { HomePage } from "./pages/HomePage";
import { PricingPage } from "./pages/PricingPage";
import { TeamsPage } from "./pages/TeamsPage";
import { ContactPage } from "./pages/ContactPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { IntentPage } from "./pages/IntentPage";
import { OnboardingPage } from "./pages/OnboardingPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";

export const router = createBrowserRouter([
  {
    element: <MarketingLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "pricing", element: <PricingPage /> },
      { path: "teams", element: <TeamsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "signup/intent", element: <IntentPage /> },
      { path: "onboarding", element: <OnboardingPage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
    ],
  },
]);
