import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-details">
        <p><strong>Address:</strong> 123 Prosperity Lane, Kuala Lumpur</p>
        <p><strong>Phone:</strong> +60 12-345 6789</p>
        <p><strong>Opening Hours:</strong> 10:00 AM - 10:00 PM (Daily)</p>
      </div>
    </section>
  );
};

export default Contact;
