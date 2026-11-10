import { profile, getSocial, blog, footer } from '../data'

const github = getSocial('github')

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <p className="footer-text">{profile.tagline}</p>
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
              <li><a href={github.url} target="_blank" rel="noopener noreferrer">{github.label}</a></li>
              <li><a href={blog.url} target="_blank" rel="noopener noreferrer">{blog.label}</a></li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h4>{footer.newsletterTitle}</h4>
            <form className="newsletter-form">
              <input type="email" placeholder={footer.newsletterPlaceholder} required />
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="made-with">Made with <i className="fas fa-heart"></i> in {profile.country}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer