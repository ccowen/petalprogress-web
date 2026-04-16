import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { Footer } from "./Footer";
import styles from "./MarketingLayout.module.css";

export function MarketingLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu and scroll to top on navigation
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const links = [
    { label: "Home", to: "/", page: "/" },
    { label: "Philosophy", to: "/philosophy", page: "/philosophy" },
    { label: "Mandala Types", to: "/mandala-types", page: "/mandala-types" },
    { label: "Shop", to: "/shop", page: "/shop" },
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
        </div>
      )}

      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
