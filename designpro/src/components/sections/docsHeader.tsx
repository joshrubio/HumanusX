'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import { Link as Linkscroll } from 'react-scroll';

const DocsHeader = () => {
    const [isFixed, setIsFixed] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const windowPos = window.scrollY
            if (windowPos >= 50) {
                setIsFixed(true)
            } else {
                setIsFixed(false)
            }
        }

        document.addEventListener('scroll', handleScroll)
        return () => document.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { label: 'Typography', path: 'typography' },
        { label: 'Colors', path: 'colors' },
        { label: 'Buttons', path: 'buttons' },
        { label: 'Icons', path: 'icons' },
        { label: 'Stack', path: 'stack' },
        { label: 'Roadmap', path: 'roadmap' },
    ]

    return (
        <header className={`main-header ${isFixed ? "fixed-header" : ""} style-guide-header`}>
            <div className="header-upper">
                <div className="container">
                    <div className="header-inner d-flex align-items-center">

                        {/* LOGO */}
                        <div className="logo-outer">
                            <div className="logo">
                                <a
                                    href="/"
                                    style={{
                                        textDecoration: 'none',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '2px'
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: '32px',
                                            fontWeight: 'bold',
                                            color: '#000000',
                                            lineHeight: '1',
                                            letterSpacing: '-0.5px'
                                        }}
                                    >
                                        HumanusX
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '11px',
                                            fontWeight: '500',
                                            color: '#666',
                                            lineHeight: '1',
                                            letterSpacing: '0.5px',
                                            textTransform: 'uppercase'
                                        }}
                                    >
                                        Documentation
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* NAV */}
                        <div className="nav-outer clearfix">
                            <nav className="main-menu navbar-expand-lg">
                                <div className="navbar-header">
                                    <div className="mobile-logo">
                                        <a href="#">
                                            <Image
                                                width={120}
                                                height={32}
                                                src="/images/logos/logo.png"
                                                alt="Logo"
                                                title="Logo"
                                            />
                                        </a>
                                    </div>
                                    <button
                                        type="button"
                                        className="navbar-toggle"
                                        data-bs-toggle="collapse"
                                        data-bs-target=".navbar-collapse"
                                    >
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                </div>

                                <div className="navbar-collapse collapse">
                                    <ul className="navigation clearfix onepage">
                                        {navItems.map(({ label, path }) => (
                                            <li key={path}>
                                                <Linkscroll
                                                    className="nav-link-click"
                                                    activeClass="active"
                                                    to={path}
                                                    spy
                                                    smooth
                                                    offset={-100}
                                                    duration={500}
                                                >
                                                    {label}
                                                </Linkscroll>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default DocsHeader
