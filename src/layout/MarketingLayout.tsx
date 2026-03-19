import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { Footer } from "./Footer";
import { SignInModal } from "./SignInModal";
import { SignInModalContext } from "../hooks/useSignInModal";
import styles from "./MarketingLayout.module.css";

export function MarketingLayout() {
  const [signInOpen, setSignInOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Home", to: "/", page: "/" },
    { label: "For Teams", to: "/teams", page: "/teams" },
    { label: "Pricing", to: "/pricing", page: "/pricing" },
  ];

  return (
    <SignInModalContext.Provider value={{ open: () => setSignInOpen(true) }}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLogo}>
          <span>𖢻</span> PetalProgress
        </Link>
        <div className={styles.navLinks}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`${styles.navLink}${location.pathname === l.page ? ` ${styles.navLinkActive}` : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className={styles.navRight}>
          <a
            href="#"
            className={styles.navSignIn}
            onClick={(e) => {
              e.preventDefault();
              setSignInOpen(true);
            }}
          >
            Sign in
          </a>
          <Link to="/signup" className={styles.navCta}>
            Sign up free
          </Link>
        </div>
      </nav>
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <SignInModal open={signInOpen} onClose={() => setSignInOpen(false)} />
    </SignInModalContext.Provider>
  );
}
