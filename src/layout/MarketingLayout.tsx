import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { textsSignInUrl } from "../launch";
import { Footer } from "./Footer";
import styles from "./MarketingLayout.module.css";

export function MarketingLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu and scroll to top (or to #hash) on navigation
  useEffect(() => {
    setMenuOpen(false);
    const target = location.hash && document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  const links = [
    { label: "Texts", to: "/texts", page: "/texts" },
    { label: "Philosophy", to: "/philosophy", page: "/philosophy" },
    { label: "Journal", to: "/journal", page: "/journal" },
  ];

  return (
    <>
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
          <a href={textsSignInUrl} className={styles.navSignIn}>
            Sign in
          </a>
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
          <a href={textsSignInUrl} className={styles.mobileLink}>
            Sign in
          </a>
        </div>
      )}

      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
