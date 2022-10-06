import React from 'react'
import headerStyles from '../styles/headerStyle.module.css'
import Link from 'next/link'
const Header = ({toggleMenu}) => {
  return (
    <header className={headerStyles.header}>
        <div className={headerStyles.menu} onClick={toggleMenu}>
            <span className={headerStyles.menuline}>
            </span><span className={headerStyles.menuline}>
            </span><span className={headerStyles.menuline}></span>
        </div>
        <div className={headerStyles.logoContainer}>
            <img src="/cityScoutlogo.png" alt="" className={headerStyles.logo} />
        </div>
        <nav className={headerStyles.nav}>
            <ul>
                <li>
                    <Link href='/' className={headerStyles.link}>home</Link>
                </li>
                <li>
                    <Link href='/About' className={headerStyles.link}>about</Link>
                </li>
                <li>
                    <Link href='/Service' className={headerStyles.link}>service</Link>
                </li>
            </ul>
        </nav>
        <div className={headerStyles.contactBtnContainer}>
            <Link href='/Contact' className={headerStyles.contactBtn} >contact</Link>
        </div>
    </header>
  )
}

export default Header