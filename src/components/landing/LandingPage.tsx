"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

const metrics = [
  { label: "New Orders", value: "18", bar: "landing-bar-orange" },
  { label: "Kitchen Queue", value: "32", bar: "landing-bar-yellow" },
  { label: "Ready", value: "11", bar: "landing-bar-green" },
];

const activeOrders = [
  "Matcha Latte + Croissant",
  "Chicken Bowl + Iced Tea",
  "Family Combo + Delivery",
];

function LayersIcon() {
  return (
    <svg className="landing-highlight-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3 3 8l9 5 9-5-9-5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12l9 5 9-5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 16l9 5 9-5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LandingPage() {
  const [signInOpen, setSignInOpen] = useState(false);
  const [year, setYear] = useState(2026);
  const mailto = `mailto:${siteConfig.contactEmail}`;

  useEffect(() => {
    setYear(new Date().getFullYear());

    function onDocClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      if (!target?.closest(".landing-sign-in-menu")) {
        setSignInOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <div className="landing-root">
      <div className="landing-bg-glow" aria-hidden="true" />
      <div className="landing-bg-grid" aria-hidden="true" />

      <header className="landing-container landing-header">
        <Link href="/" className="landing-brand">
          <Image
            className="landing-brand-mark"
            src="/logo.svg"
            alt=""
            width={40}
            height={40}
            priority
          />
          <span className="landing-brand-copy">
            <span className="landing-brand-title">{siteConfig.name}</span>
            <span className="landing-brand-sub">{siteConfig.subtitle}</span>
          </span>
        </Link>

        <div className="landing-header-actions">
          <div className="landing-sign-in-menu">
            <button
              type="button"
              className="landing-btn landing-btn-primary landing-btn-sm"
              aria-expanded={signInOpen}
              onClick={() => setSignInOpen((open) => !open)}
            >
              Sign in
            </button>
            {signInOpen ? (
              <div className="landing-sign-in-panel" role="menu">
                <Link href="/admin/login" role="menuitem" onClick={() => setSignInOpen(false)}>
                  Admin
                </Link>
                <Link
                  href="/restaurant/login"
                  role="menuitem"
                  onClick={() => setSignInOpen(false)}
                >
                  Restaurant
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <main className="landing-main">
        <section className="landing-container landing-hero">
          <div className="landing-animate-left">
            <div className="landing-pill">
              <span className="landing-pill-dot" aria-hidden="true" />
              {siteConfig.tagline}
            </div>
            <h1 className="landing-hero-title">
              Run your restaurant from{" "}
              <span className="landing-hero-gradient">one connected system.</span>
            </h1>
            <p className="landing-hero-lead">{siteConfig.description}</p>
            <ul className="landing-trust" aria-label="Highlights">
              <li>24/7 web orders</li>
              <li className="landing-trust-sep" aria-hidden="true" />
              <li>Live kitchen sync</li>
              <li className="landing-trust-sep" aria-hidden="true" />
              <li>One admin hub</li>
            </ul>
            <div className="landing-stat-grid">
              <div className="landing-stat-card">
                <strong className="landing-stat-num">24/7</strong>
                <span className="landing-stat-label">Online orders</span>
              </div>
              <div className="landing-stat-card">
                <strong className="landing-stat-num">Live</strong>
                <span className="landing-stat-label">Kitchen flow</span>
              </div>
              <div className="landing-stat-card">
                <strong className="landing-stat-num">One</strong>
                <span className="landing-stat-label">Connected stack</span>
              </div>
            </div>
          </div>

          <div className="landing-dash landing-animate-right">
            <div className="landing-dash-glow" aria-hidden="true" />
            <div className="landing-dash-outer">
              <div className="landing-dash-inner">
                <div className="landing-dash-head">
                  <div>
                    <div className="landing-dash-kicker">Operations snapshot</div>
                    <div className="landing-dash-title">Café Verde — dinner rush</div>
                  </div>
                  <div className="landing-dash-open">
                    <span className="landing-live-dot" aria-hidden="true" />
                    Open
                  </div>
                </div>
                <div className="landing-metrics">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="landing-metric-card">
                      <div className={`landing-metric-bar ${metric.bar}`} />
                      <div className="landing-metric-label">{metric.label}</div>
                      <div className="landing-metric-value">{metric.value}</div>
                    </div>
                  ))}
                </div>
                <div className="landing-dash-split">
                  <div className="landing-dash-orders">
                    <div className="landing-dash-rowhead">
                      <span>Active orders</span>
                    </div>
                    {activeOrders.map((item, index) => (
                      <div key={item} className="landing-order-row">
                        <div>
                          <div className="landing-order-id">#{1082 + index}</div>
                          <div className="landing-order-sub">{item}</div>
                        </div>
                        <div className="landing-order-tag">In progress</div>
                      </div>
                    ))}
                  </div>
                  <div className="landing-dash-highlight">
                    <LayersIcon />
                    <div className="landing-highlight-title">POS + web + kitchen</div>
                    <p className="landing-highlight-text">
                      Every channel stays aligned with prep, pickup, and delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="landing-container landing-footer-inner">
          <div className="landing-footer-brand">
            <Link href="/" className="landing-footer-brand-row">
              <Image src="/logo.svg" alt="" width={32} height={32} />
              <span className="landing-footer-brand-title">{siteConfig.name}</span>
            </Link>
            <p className="landing-footer-copy">
              © {year} {siteConfig.name}. All rights reserved.
            </p>
          </div>
          <div className="landing-footer-links">
            <a href={mailto}>{siteConfig.contactEmail}</a>
            <Link href="/admin/login">Admin</Link>
            <Link href="/restaurant/login">Restaurant</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
