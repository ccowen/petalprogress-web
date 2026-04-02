import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { Footer } from "./Footer";
import { SignInModal } from "./SignInModal";
import { SignInModalContext } from "../hooks/useSignInModal";
import styles from "./MarketingLayout.module.css";

export function MarketingLayout() {
  const [signInOpen, setSignInOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

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
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.hamburgerBar} ${menuOpen ? styles.hamburgerOpen : ""}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`${styles.mobileLink}${location.pathname === l.page ? ` ${styles.mobileLinkActive}` : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <div className={styles.mobileDivider} />
          <a
            href="#"
            className={styles.mobileLink}
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              setSignInOpen(true);
            }}
          >
            Sign in
          </a>
          <Link to="/signup" className={styles.mobileCta}>
            Sign up free
          </Link>
        </div>
      )}

      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <SignInModal open={signInOpen} onClose={() => setSignInOpen(false)} />
    </SignInModalContext.Provider>
  );
}
