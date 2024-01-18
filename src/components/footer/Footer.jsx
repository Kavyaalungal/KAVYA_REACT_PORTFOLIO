import React from 'react'
import "./footer.css"
function Footer() {
  return (
  <footer className="footer">
    <div className="footer_container container">
        <h1 className="footer_title">Kavya</h1>

        <ul className="footer_list">
            <li>
                <a href="#about" className="footer_link">About</a>
            </li>
            <li>
                <a href="#portfolio" className="footer_link">Projects</a>
            </li>
        </ul>
        <div className="footer_social">
        <a href="https://www.instagram.com/" className="footer_social-link" target="_blank">
        <i class="uil uil-instagram"></i>
        </a>
        <a href="https://web.whatsapp.com/" className="footer_social-link" target="_blank">
        <i class="uil uil-whatsapp"></i>
            </a>
            <a href="https://github.com/" className="footer_social-link" target="_blank">
            <i class="uil uil-github-alt"></i>
            </a>
        </div>
        <span className='footer_copy'>&copy; 2024 Kavya. All rights reserved.</span>
    </div>
  </footer>
  )
}

export default Footer
