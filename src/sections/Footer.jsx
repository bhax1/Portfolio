import { useEffect } from 'react'

import resume from '../assets/files/Resume.pdf'

const Footer = () => {
  useEffect(() => {
    document.getElementById('current-year').textContent = new Date().getFullYear()
  }, [])

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="text-gradient">BO</span>
            </a>
            <p className="footer-text">Digital creator & problem solver</p>
          </div>
          
          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#journey">Journey</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li><a href={resume} download>Resume</a></li>
              <li><a href="https://github.com/bhax1" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://dev.to/bhax1" target="_blank" rel="noopener noreferrer">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">&copy; <span id="current-year"></span> Bob Ongoy. All rights reserved.</p>
          <p className="made-with">Made with <i className="fas fa-heart"></i> in the Philippines</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer