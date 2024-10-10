'use client'
import React from 'react'
import '../assets/styles/navbar.css';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav>
        <div className="desktop-menu">
            <div className="desktop-page">
            <div className="navbar-desktop">
                <img src="images/_2834812530736.png" className="desktop-cyberia"/>
                    <div className="nav-desktop-item agency">
                        Агенство
                    </div>

                    <div className="nav-desktop-item services">
                        Услуги
                    </div>

                    <div className="nav-desktop-item cases">
                        <Link href='/cases'>Кейсы</Link>
                    </div>

                    <div className="nav-desktop-item blog">
                        Блог
                    </div>

                    <div className="nav-desktop-item contacts">
                        Контакты
                    </div>
            </div>
            </div>
        </div>

        <div className="mobile-menu">
            <div className="mobile-page">
                <div className="navbar-mobile">
                    <div className="mobile-menu-burger" onClick={() => setIsMobileMenuOpen((prev) => !prev)} style={{cursor: 'pointer'}}>
                        <img src="images/Menu-burger.png"/>
                    </div>
                    <img src="images/_2834812530736.png" className="mobile-cyberia"/>
                </div>
                {isMobileMenuOpen && (<div className="nav-mobile-burger">
                    <div className="nav-mobile-item agency">
                        Агенство
                    </div>

                    <div className="nav-mobile-item services">
                        Услуги
                    </div>

                    <div className="nav-mobile-item scases">
                        Кейсы
                    </div>

                    <div className="nav-mobile-item blog">
                        Блог
                    </div>

                    <div className="nav-mobile-item contacts">
                        Контакты
                    </div>
                </div>)
                }
                </div>
            </div>
    </nav>
    
  )
}

export default Navbar