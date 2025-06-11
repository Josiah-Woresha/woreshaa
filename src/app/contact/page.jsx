// app/contact/page.jsx
"use client"; // This is a Next.js App Router specific directive

import React from 'react';
import ReactLenis from '@studio-freight/react-lenis'; // Assuming you use this for smooth scrolling

const ContactPage = () => {
  return (
    <ReactLenis root> {/* Provides smooth scrolling effect */}
      <div className="contact-page-container">
        {/* Hero-like Introduction Section */}
        <section className="contact-hero">
          <div className="contact-hero-content">
            <h1 className="contact-title">Let's Build Something Amazing.</h1>
            <p className="contact-tagline">
              Whether you have a groundbreaking idea, a challenging project, or just want to discuss the future of tech, I'm always open to a conversation.
            </p>
          </div>
        </section>

        {/* Main Contact Details Section */}
        <section className="contact-details-section">
          <div className="contact-details-grid">
            {/* Email Card */}
            <div className="contact-card">
              <h3>Say Hello</h3>
              <p>The quickest way to reach me for project inquiries or general questions is via email. I strive to get back as soon as possible.</p>
              <a href="mailto:josiahworesha19@gmail.com" className="contact-link" aria-label="Email me at josiahworesha19@gmail.com">
                josiahworesha19@gmail.com
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="contact-card">
              <h3>Connect Professionally</h3>
              <p>For professional networking, collaborations, or partnership opportunities, let's connect on LinkedIn.</p>
              <a href="https://www.linkedin.com/in/josiah-woresha-03929730b/" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Connect on LinkedIn">
                LinkedIn Profile &rarr;
              </a>
            </div>

            {/* GitHub Card */}
            <div className="contact-card">
              <h3>Explore My Code</h3>
              <p>Dive into my projects, review code, or suggest improvements on GitHub. Your feedback is always welcome.</p>
              <a href="https://github.com/Josiah-Woresha/" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="View my GitHub profile">
                GitHub Profile &rarr;
              </a>
            </div>

            {/* Optional: Twitter Card or another relevant platform */}
            <div className="contact-card">
              <h3>Follow My Updates</h3>
              <p>Catch my occasional thoughts on design, development, and industry trends. Stay updated on my latest work.</p>
              <a href="https://x.com/JosiahWoresha" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Follow me on X">
                X @JosiahWoresha &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Final Call to Action Section */}
        <section className="contact-cta">
          <h2>Ready to transform your ideas into reality?</h2>
          <p>
            Don't hesitate to get in touch. I'm genuinely excited to hear about your vision and explore how we can bring it to life, no matter the scale or complexity.
          </p>
          <a href="mailto:josiahworesha19@gmail.com" className="cta-button" aria-label="Send me an email to start a project">
            Start a Conversation
          </a>
        </section>

      </div>
    </ReactLenis>
  );
};

export default ContactPage;
