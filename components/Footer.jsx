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
          <p>beloved global concept developers</p>
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
          <Link href='/'>
            twitter
          </Link>
          <Link href='/'>
            email
          </Link>
        </div>
        <div className="foot">
          <div className="footer-header">
            <h2>stay in the loop</h2>
            <span className="line"></span>
          </div>
          <p>
            Do not miss any opportunity. Subscribe and get informed on the latest properties, industry trenda and news, and investment tips.
          </p>
        </div>
      </div>   
    </footer>
  )
}

export default Footer