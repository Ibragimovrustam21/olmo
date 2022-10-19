import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import $ from 'jquery'
import '../css/navbar.css'
import { Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'

export const anime = (a) => {
  let b = ''
  if (a === 'why-OLMO') b = 'business-goals'
  if (a === 'best-solutions') b = 'marketing-card'
  if (a === 'integrations') b = 'analytics'
  if (a === 'how-it-works') b = 'committed'
  if (a === 'n-Features') b = 'species'
  if (a === 'n-Pricing') b = 'scale-business'
  if (a === 'n-FAQs') b = 'faqs'
  if (a === 'testimonials') b = 'n-carousel'
  if (a === 'n-buttons') b = 'siteBottom'
  if (a === 'reply') b = 'published-form'

  $('html,body').animate({
    scrollTop: $(`.${b}`).offset().top,
  }, 2000);
}

export const Navbar = () => {
  const Router = useHistory()
  const [path, setPath] = useState('')

  window.addEventListener('scroll', function () {
    let head = document.querySelector('header')
    head.classList.toggle('sticky', window.scrollY > 0)
  })
  useEffect(() => {
    switch (Router.location.pathname) {
      case '/faqs' || '/download':
        setPath('pathNameActive')
        break;
      case '/':
        document.getElementsByClassName('about')[0].style.display = 'block'
        break;
      default: setPath('')
        break;
    }
  }, [Router.location.pathname])

  const navActive = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar-menu-group");

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("nav-active");
  }
  const addClassDF = (e) => {
    let a = document.querySelectorAll('.about-block')
    a[e].classList.toggle('about-block-d-f')
  }

  return (
    <header className={path}>
      <Toolbar className='navbar'>
        <div className='navbar-logo-brand'>
          <p>
            <img alt='' src='https://dsathemes.com/html/olmo_1.4/files/images/logo-01.png' height='40' />
          </p>
        </div>
        <div className='navbar-menu-group'>
          <div className='navbar-menu-item'>
            <div>
              <h3>
                <Link to='/' className='n-Home'>Home</Link>
              </h3>
            </div>
            <div className='about-menu-hover about' onClick={(e) => addClassDF('0')}>
              <h3>
                About <span className='fas fa-caret-down' />
              </h3>
              <div className='about-block' >
                <span className='qirra'></span>
                <ul>
                  <li onClick={() => anime('why-OLMO')}>Why OLMO ?</li>
                  <li onClick={() => anime('best-solutions')}>Best Solutions</li>
                  <li onClick={() => anime('integrations')}>Integrations</li>
                  <li onClick={() => anime('how-it-works')}>How it works ?</li>
                  <li onClick={() => anime('testimonials')}>Testimonials</li>
                </ul>
              </div>
            </div>
            <div className='about-menu-hover' onClick={(e) => addClassDF('1')}>
              <h3>
                Pages <span className='fas fa-caret-down' />
              </h3>
              <div className='about-block '>
                <span className='qirra'></span>
                <div>
                  <ul>
                    <li><Link to='/about-us'>About Us </Link></li>
                    <li><Link to='/pricing'>Pricing Packages </Link></li>
                    <li><Link to='/download'>Download Page </Link></li>
                    <li><Link to='/our-projects'>Our Projects </Link></li>
                    <li><Link to='/project-details'>Project Details </Link></li>
                    <li><Link to='/features'>Features & Addons </Link></li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li><Link to='/meet-the-team'>Meet the Team</Link></li>
                    <li><Link to='/faqs'>FAQs Page</Link></li>
                    <li><Link to='/blog-listing'>Blog Listing</Link></li>
                    <li><Link to='/single-block-post'>Single Block Post</Link></li>
                    <li><Link to='/terms-privacy'>Terms & Privacy</Link></li>
                    <li><Link to='/contactUs'>Contact Us</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3>
                <Link to='/features'>Features</Link>
              </h3>
            </div>
            <div>
              <h3>
                <Link to='pricing'>Pricing</Link>
              </h3>
            </div>
            <div>
              <h3>
                <Link to='/faqs' >FAQs</Link>
              </h3>
            </div>
          </div>
          <button className='btn' onClick={() => { anime('n-buttons') }} >
            Let's Started
          </button>
        </div>
        <div className="hamburger" onClick={navActive}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </Toolbar>
    </header>
  )
}