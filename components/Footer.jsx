import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer>
      <div className="foot-container">
        <div className="foot">
          <div className="footer-header">
            <h2>quik links</h2>
            <span className="line"></span>
          </div>
          <Link href='/Service'>
            service
          </Link>
          <Link href='/Blog'>
            blog
          </Link>
          <Link href='/Contact'>
            contact
          </Link>
        </div>
        <div className="foot">
          <div className="footer-header">
            <h2>patners</h2>
            <span className="line"></span>
          </div>
          <p>tansian geospatial consult</p>
          <p>beloved architectural concept</p>
          <p>ebonyi real-estate org</p>
        </div>
        <div className="foot">
          <div className="footer-header">
            <h2>social platforms</h2>
            <span className="line"></span>
          </div>
          <a href='https://web.facebook.com/profile.php?id=100086289660325' target='_blank' rel="noreferrer">
            facebook
          </a>
          <a href='https://www.instagram.com/cityscoutrealtors/' target='_blank' rel="noreferrer">
            instagram
          </a>
          <a href='/'>
            twitter
          </a>
          <a href='/'>
            email
          </a>
        </div>
        <div className="foot">
          <div className="footer-header">
            <h2>newsletter</h2>
            <span className="line"></span>
          </div>
          <p>
            Stay in a loop
          </p>
        </div>
      </div>   
    </footer>
  )
}

export default Footer