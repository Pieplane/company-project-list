import React from 'react'
import '../assets/styles/navbar.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar">
        <img src="images/_2834812530736.png" className="cyberia"/>

        <div className="group128">
            <div className="agency">
                Агенство
            </div>

            <div className="services">
                Услуги
            </div>

            <div className="cases">
                <Link href='/cases'>Кейсы</Link>
            </div>

            <div className="blog">
                Блог
            </div>

            <div className="contacts">
                Контакты
            </div>
        </div>
    </div>
  )
}

export default Navbar