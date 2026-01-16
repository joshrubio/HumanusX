'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import { Link as Linkscroll } from 'react-scroll';
import { menuList } from "@/utils/fackData/menuList"

import { usePathname } from "next/navigation"

const Header = () => {
    const pathname = usePathname()
    const [isFixed, setIsFixed] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const windowPos = window.scrollY;
            if (windowPos >= 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }

        document.addEventListener('scroll', handleScroll)

        return () => document.removeEventListener('scroll', handleScroll)
    }, [])

    if (pathname === '/') return null

    return (
        <header className={`main-header ${isFixed ? "fixed-header" : ""}`}>
            <div className="header-upper">
                <div className="container">
                    <div className="header-inner d-flex align-items-center">
                        <div className="logo-outer">
                            <div className="logo">
                                <a href="/" style={{
                                    textDecoration: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '2px'
                                }}>
                                    <span style={{
                                        fontSize: '46px',
                                        fontWeight: 'bold',
                                        color: '#ff4f01',
                                        lineHeight: '1',
                                        letterSpacing: '-0.5px'
                                    }}>
                                        HumanusX
                                    </span>
                                    <span style={{
                                        fontSize: '11px',
                                        fontWeight: '500',
                                        color: '#666',
                                        lineHeight: '1',
                                        letterSpacing: '0.5px',
                                        textTransform: 'uppercase'
                                    }}>
                                        Empowering Hospitality Worldwide
                                    </span>
                                </a>
                            </div>
                        </div>
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
                                                title="Logo" />
                                        </a>
                                    </div>
                                    <button type="button" className="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                </div>
                                <div className="navbar-collapse collapse">
                                    <ul className="navigation clearfix onepage">
                                        {
                                            menuList.map(({ id, label, path }) =>
                                                <li key={id}>
                                                    <Linkscroll
                                                        className="nav-link-click"
                                                        smooth={true} to={`${path}`}>
                                                        {label}
                                                    </Linkscroll>
                                                </li>)
                                        }
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

export default Header