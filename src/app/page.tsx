'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SlideUp from "@/utils/animations/slideUp";
import DocsHeader from '@/components/sections/docsHeader';
import DevelopmentPlan from '@/components/sections/developmentPlan';

const StyleGuideLanding = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const colors = [
    { name: 'Primary', var: 'var(--primary-color)', hex: '#ff4f01', bgClass: 'bg-primary-custom' },
    { name: 'Main (Text)', var: 'var(--main-color)', hex: '#101010', bgClass: 'bg-main-custom' },
    { name: 'Heading', var: 'var(--heading-color)', hex: '#000000', bgClass: 'bg-heading-custom' },
    { name: 'Lighter', var: 'var(--lighter-color)', hex: '#1F1F1F', bgClass: 'bg-lighter-custom' },
    { name: 'Black', var: 'var(--black-color)', hex: '#070707', bgClass: 'bg-black-custom' },
    { name: 'Subtitle', var: 'var(--subtitle-color)', hex: 'rgb(119, 119, 125)', bgClass: 'bg-subtitle-custom' },
    { name: 'Body Background', var: 'var(--body-background)', hex: '#fff6ec', bgClass: 'bg-body-custom' },
    { name: 'White', var: 'var(--white-color)', hex: '#ffffff', bgClass: 'bg-white-custom' },
    { name: 'Border', var: 'var(--border-color)', hex: '#ff4f01', bgClass: 'bg-border-custom' },
  ];

  const typography = [
    { tag: 'H1', text: 'Headline 1', size: '58px', font: 'Bricolage Grotesque', class: 'h1' },
    { tag: 'H2', text: 'Headline 2', size: '22px', font: 'Bricolage Grotesque', class: 'h2' },
    { tag: 'H3', text: 'Headline 3', size: '30px', font: 'Bricolage Grotesque', class: 'h3' },
    { tag: 'H4', text: 'Headline 4', size: '24px', font: 'Bricolage Grotesque', class: 'h4' },
    { tag: 'H5', text: 'Headline 5', size: '20px', font: 'Bricolage Grotesque', class: 'h5' },
    { tag: 'H6', text: 'Headline 6', size: '16px', font: 'Bricolage Grotesque', class: 'h6' },
    { tag: 'Body', text: 'Regular paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', size: '16px', font: 'Manrope', class: '' },
  ];

  return (
    <main>
      <DocsHeader />
      {/* Hero Section */}
      <section id="home" className="main-hero-area" style={{ paddingTop: '150px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <SlideUp className="hero-content position-relative">
                <h3><i className="ri-folder-info-line" />Design System & Documentation</h3>
                <h2>HumanusX Project<br />Style Guide</h2>
                <p>
                  Welcome to the comprehensive design system for HumanusX. This guide serves as the single source of truth for our visual language,
                  ensuring consistency and scalability across the entire platform. Here you will find our typography, color palettes, components, and best practices.
                </p>
                <div className="hero-btns">
                  <Link href="/main" className="theme-btn">
                    Go to Project <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
                <div className="dot-shape"><img src="/images/shapes/shape1.png" alt="Shape" /></div>
                <div className="dot-shape2"><img src="/images/shapes/shape2.png" alt="Shape" /></div>
              </SlideUp>
            </div>
          </div>
        </div>
      </section>

      <div className="container pb-5">
        {/* Typography Section */}
        <section id="typography" className="mb-5 p-4 bg-white rounded shadow-sm border">
          <div className="row mb-4">
            <div className="col-12 border-bottom pb-2">
              <h2 className="h4 text-uppercase text-secondary ls-1">01. Typography</h2>
              <p className="mt-2 text-muted">
                Typography is the foundation of our design. We use <strong>Bricolage Grotesque</strong> for headings to convey a modern, robust character,
                and <strong>Manrope</strong> for body text to ensure optimal readability across all devices. Consistent hierarchy establishes order and helps users scan content efficiently.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {typography.map((item, index) => (
                <div key={index} className="row align-items-center mb-4">
                  <div className="col-md-3 text-muted">
                    <span style={{ fontFamily: 'monospace' }}>{item.tag}</span> <br />
                    <small>{item.font} - {item.size}</small>
                  </div>
                  <div className="col-md-9">
                    <div className={item.class}>{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Colors Section */}
        <section id="colors" className="mb-5 p-4 bg-white rounded shadow-sm border">
          <div className="row mb-4">
            <div className="col-12 border-bottom pb-2">
              <h2 className="h4 text-uppercase text-secondary ls-1">02. Color Palette</h2>
              <p className="mt-2 text-muted">
                Our color palette defines the visual tone of HumanusX. The <strong>Primary Orange</strong> (#ff4f01) drives action and energy, while our neutral monotones ensure content legibility.
                This palette is designed to meet WCAG accessibility standards while maintaining a strong brand identity. Click on any color to copy its Hex code.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {colors.map((color, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                <div className="card h-100 border-0 shadow-sm" style={{ overflow: 'hidden' }}>
                  <div
                    className="card-img-top d-flex align-items-center justify-content-center"
                    style={{
                      height: '150px',
                      backgroundColor: color.hex,
                      cursor: 'pointer',
                      position: 'relative'
                    }}
                    onClick={() => copyToClipboard(color.hex)}
                  >
                    <span
                      className="badge bg-white text-dark shadow-sm position-absolute"
                      style={{ opacity: 0.9 }}
                    >
                      {copiedColor === color.hex ? 'Copied!' : color.hex}
                    </span>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title h6 mb-1">{color.name}</h5>
                    <p className="card-text small text-muted font-monospace mb-0">{color.var}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Buttons Section */}
        <section id="buttons" className="mb-5 p-4 bg-white rounded shadow-sm border">
          <div className="row mb-4">
            <div className="col-12 border-bottom pb-2">
              <h2 className="h4 text-uppercase text-secondary ls-1">03. Buttons & Actions</h2>
              <p className="mt-2 text-muted">
                Buttons are the primary interactive elements. We use a clear hierarchy: <strong>Primary Buttons</strong> for main calls-to-action (CTAs),
                <strong>Secondary Buttons</strong> for alternative paths, and icon-based buttons for compact actions. Consistent hover states provide immediate feedback to users.
              </p>
            </div>
          </div>
          <div className="row gy-4 align-items-center">
            <div className="col-md-6">
              <h6 className="text-muted mb-3">Primary Theme Button</h6>
              <a href="#" className="theme-btn" onClick={(e) => e.preventDefault()}>
                Get Started <i className="ri-arrow-right-line"></i>
              </a>
              <div className="mt-2 text-muted small font-monospace">.theme-btn</div>
            </div>
            <div className="col-md-6">
              <h6 className="text-muted mb-3">Secondary Theme Button</h6>
              <a href="#" className="theme-btn differenct-color" onClick={(e) => e.preventDefault()}>
                Book a Call <i className="ri-phone-line"></i>
              </a>
              <div className="mt-2 text-muted small font-monospace">.theme-btn .differenct-color</div>
            </div>
            <div className="col-md-6">
              <h6 className="text-muted mb-3">Details Button (Circular)</h6>
              <a href="#" className="details-btn" onClick={(e) => e.preventDefault()}>
                <i className="ri-arrow-right-up-line"></i>
              </a>
              <div className="mt-2 text-muted small font-monospace">.details-btn</div>
            </div>
            <div className="col-md-6">
              <h6 className="text-muted mb-3">Read More Link</h6>
              <a href="#" className="read-more" onClick={(e) => e.preventDefault()}>
                Read More <i className="ri-arrow-right-line"></i>
              </a>
              <div className="mt-2 text-muted small font-monospace">.read-more</div>
            </div>
          </div>
        </section>

        {/* Icons Section */}
        <section id="icons" className="mb-5 p-4 bg-white rounded shadow-sm border">
          <div className="row mb-4">
            <div className="col-12 border-bottom pb-2">
              <h2 className="h4 text-uppercase text-secondary ls-1">04. Iconography</h2>
              <p className="mt-2 text-muted">
                We utilize <strong>Remix Icon</strong>, an open-source neutral style system. These icons are crafted for clarity and consistency.
                They serve as visual anchors, helping users navigate the interface intuitively.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-4">
              <a href="https://remixicon.com/" target="_blank" className="text-decoration-underline text-primary">View Full Library</a>
            </div>
            <div className="col-12">
              <div className="d-flex flex-wrap gap-4 text-center">
                {[
                  'ri-home-line', 'ri-user-line', 'ri-settings-3-line',
                  'ri-search-line', 'ri-star-line', 'ri-arrow-right-line',
                  'ri-check-line', 'ri-close-line', 'ri-menu-line',
                  'ri-twitter-x-line', 'ri-linkedin-fill', 'ri-facebook-fill'
                ].map((icon, i) => (
                  <div key={i} className="p-3 border rounded">
                    <i className={`${icon} fs-2 mb-2`}></i>
                    <br />
                    <small className="font-monospace text-muted" style={{ fontSize: '10px' }}>{icon}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="stack" className="mb-5 p-4 bg-white rounded shadow-sm border">
          <div className="row mb-4">
            <div className="col-12 border-bottom pb-2">
              <h2 className="h4 text-uppercase text-secondary ls-1">05. Technology Stack</h2>
              <p className="mt-2 text-muted">
                The HumanusX platform is built on a modern, performance-oriented stack. <strong>Next.js 14</strong> ensures server-side rendering and static optimization,
                while <strong>Bootstrap 5</strong> and customised CSS provide a robust layout engine. <strong>Framer Motion</strong> powers the smooth animations and interactions.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Next.js
                  <span className="badge bg-primary rounded-pill">14.2.18</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  React
                  <span className="badge bg-primary rounded-pill">^18</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Bootstrap
                  <span className="badge bg-primary rounded-pill">^5.3.3</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Framer Motion
                  <span className="badge bg-primary rounded-pill">^11.12.0</span>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  React Photo View
                  <span className="badge bg-secondary rounded-pill">^1.2.6</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  React Scroll
                  <span className="badge bg-secondary rounded-pill">^1.9.0</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Swiper
                  <span className="badge bg-secondary rounded-pill">^11.1.15</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <DevelopmentPlan />

      </div>
    </main>
  );
};

export default StyleGuideLanding;