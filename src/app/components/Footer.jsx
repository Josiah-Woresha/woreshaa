// components/Footer.jsx
import React from "react";
import Link from "next/link"; // For internal links

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Let's Connect</h3>
          <p>
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
          <p className="footer-email">
            Email:{" "}
            <a href="mailto:josiahworesha19@gmail.com">josiahworesha19@gmail.com</a>
          </p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/info">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Me</h3>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/josiah-woresha-03929730b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Josiah-Woresha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://x.com/JosiahWoresha"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Josiah Woresha. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;