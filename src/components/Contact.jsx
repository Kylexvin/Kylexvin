import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const form = e.target;
    const formData = new FormData(form);

    try {
      // REPLACED with your unique FormSubmit hash
      const response = await fetch('https://formsubmit.co/7584250f1f33226ebf2eb659adbed332', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        form.reset();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json();
        setError(data.message || 'Something went wrong. Try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get in <span className="secondary-neon-text">Touch</span></h2>
          <div className="header-line"></div>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="glass-card">
              <h3 className="sub-title">Contact Information</h3>
              <div className="info-item">
                <div className="info-icon"><i className="fas fa-envelope"></i></div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>vinnykylex@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="info-text">
                  <h4>Location</h4>
                  <p>Eldoret, Kenya</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><i className="fas fa-phone-alt"></i></div>
                <div className="info-text">
                  <h4>Phone</h4>
                  <p>+254768610613</p>
                </div>
              </div>
              <div className="social-links">
                <a href="https://github.com/Kylexvin" className="social-link"><i className="fab fa-github"></i></a>
                <a href="https://ke.linkedin.com/in/vinny-kylex-622890363" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://x.com/kylexvinny" className="social-link"><i className="fab fa-x"></i></a>
                <a href="https://www.instagram.com/kylex_vin/" className="social-link"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <div className="glass-card">
              <h3 className="sub-title">Send a Message</h3>
              <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                {/* FormSubmit hidden fields */}
                <input type="hidden" name="_subject" value="New Contact Form Submission" />
                <input type="hidden" name="_replyto" value="email" />
                
                <div className="form-group">
                  <input type="text" id="name" name="name" placeholder="Your Name" required />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className="form-group">
                  <input type="email" id="email" name="email" placeholder="Your Email" required />
                  <label htmlFor="email">Your Email</label>
                </div>
                <div className="form-group">
                  <input type="text" id="subject" name="subject" placeholder="Subject" required />
                  <label htmlFor="subject">Subject</label>
                </div>
                <div className="form-group">
                  <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                  <label htmlFor="message">Your Message</label>
                </div>
                
                <button type="submit" className="cta-primary" disabled={loading}>
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  <i className={`fas ${loading ? 'fa-spinner fa-pulse' : 'fa-paper-plane'}`}></i>
                </button>
                
                {error && (
                  <div style={{ marginTop: '1rem', color: '#ff4444', fontWeight: 'bold' }}>
                    ❌ {error}
                  </div>
                )}
                
                {submitted && (
                  <div style={{ marginTop: '1rem', color: '#00c851', fontWeight: 'bold' }}>
                    ✓ Message sent successfully!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;