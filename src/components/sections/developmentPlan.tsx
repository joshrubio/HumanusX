'use client';
import React from 'react';

const DevelopmentPlan = () => {
    return (
        <section id="roadmap" className="py-5 bg-dark text-white rounded-3 my-5">
            <div className="container p-4">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <span className="badge bg-primary mb-2">Internal Documentation</span>
                        <h2 className="display-5 fw-bold text-white">Development Roadmap</h2>
                        <p className="lead text-white-50">Strategic migration timeline from WordPress to Next.js</p>
                    </div>
                </div>

                <div className="row g-4">
                    {/* Phase 1 */}
                    <div className="col-12">
                        <div className="card bg-secondary bg-opacity-10 border-warning border-2 shadow-sm">
                            <div className="card-header bg-transparent border-0 d-flex justify-content-between align-items-center">
                                <h3 className="h5 text-primary mb-0 fw-bold">Phase 1: UX Strategy & Migration</h3>
                                <span className="badge bg-warning text-dark"><i className="ri-loader-4-line me-1"></i>In Progress</span>
                            </div>
                            <div className="card-body text-white">
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2 d-flex"><i className="ri-checkbox-circle-fill text-success me-2 mt-1"></i> UX Audit Synthesis</li>
                                    <li className="mb-2 d-flex"><i className="ri-checkbox-blank-circle-line text-secondary me-2 mt-1"></i> User Journey Definition</li>
                                    <li className="mb-2 d-flex"><i className="ri-checkbox-blank-circle-line text-secondary me-2 mt-1"></i> Final Sitemap Creation</li>
                                    <li className="mb-2 d-flex"><i className="ri-checkbox-blank-circle-line text-secondary me-2 mt-1"></i> Page Structure Definition</li>
                                    <li className="mb-2 d-flex"><i className="ri-checkbox-circle-fill text-success me-2 mt-1"></i> WP Migration Strategy</li>
                                </ul>

                                <div className="bg-dark bg-opacity-50 p-3 rounded mb-3">
                                    <p className="small mb-0">Transitioning to a headless architecture (Next.js) resolves the plugin bloat of the previous WP site. We prioritize <strong>Core Web Vitals</strong> (LCP, CLS) to improve SEO rankings and reduce bounce rates.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="col-12">
                        <div className="card bg-secondary bg-opacity-10 border-warning border-2 shadow-sm">
                            <div className="card-header bg-transparent border-0 d-flex justify-content-between align-items-center">
                                <h3 className="h5 text-white mb-0">Phase 2: Technical Setup</h3>
                                <span className="badge bg-warning text-dark"><i className="ri-loader-4-line me-1"></i>In Progress</span>
                            </div>
                            <div className="card-body text-white">
                                <ul className="list-unstyled">
                                    <li className="mb-2 d-flex"><i className="ri-checkbox-circle-fill text-success me-2 mt-1"></i> Next.js Project Initialization</li>
                                    <li className="mb-2 d-flex"><i className="ri-checkbox-blank-circle-line text-secondary me-2 mt-1"></i> Multilingual Support (ES/EN/FR/DE)</li>
                                    <li className="mb-2 d-flex"><i className="ri-checkbox-blank-circle-line text-secondary me-2 mt-1"></i> API Integrations (Appointment, Payments, Subs)</li>
                                    <li className="mb-2 d-flex"><i className="ri-checkbox-blank-circle-line text-secondary me-2 mt-1"></i> SEO Technical Setup</li>
                                    <li className="mb-2 d-flex"><i className="ri-checkbox-blank-circle-line text-secondary me-2 mt-1"></i> Component Architecture</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="col-12">
                        <div className="card bg-secondary bg-opacity-10 border-0 shadow-sm">
                            <div className="card-header bg-transparent border-0 d-flex justify-content-between align-items-center">
                                <h3 className="h5 text-white-50 mb-0">Phase 3: Frontend Development</h3>
                                <span className="badge bg-secondary">Pending</span>
                            </div>
                            <div className="card-body text-white-50">
                                <ul className="list-unstyled">
                                    <li className="mb-2 d-flex"><i className="ri-checkbox-blank-circle-line me-2 mt-1"></i> High-Conversion Home Page</li>
                                    <li className="mb-2 d-flex"><i className="ri-checkbox-blank-circle-line me-2 mt-1"></i> Services Sections</li>
                                    <li className="mb-2 d-flex"><i className="ri-checkbox-blank-circle-line me-2 mt-1"></i> Contact & Booking Pages</li>
                                    <li className="mb-2 d-flex"><i className="ri-checkbox-blank-circle-line me-2 mt-1"></i> Micro-interactions & Animations</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Phase 4 */}
                    <div className="col-12">
                        <div className="card bg-secondary bg-opacity-10 border-0 shadow-sm">
                            <div className="card-header bg-transparent border-0 d-flex justify-content-between align-items-center">
                                <h3 className="h5 text-white-50 mb-0">Phase 4: Optimization & QA</h3>
                                <span className="badge bg-secondary">Pending</span>
                            </div>
                            <div className="card-body text-white-50">
                                <ul className="list-unstyled">
                                    <li className="mb-2 d-flex"><i className="ri-checkbox-blank-circle-line me-2 mt-1"></i> Core Web Vitals Optimization</li>
                                    <li className="mb-2 d-flex"><i className="ri-checkbox-blank-circle-line me-2 mt-1"></i> Mobile Responsiveness Check</li>
                                    <li className="mb-2 d-flex"><i className="ri-checkbox-blank-circle-line me-2 mt-1"></i> Cross-browser Compatibility</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DevelopmentPlan;
