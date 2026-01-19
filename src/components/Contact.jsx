import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">聯繫我們</h2>
      <div className="contact-details">
        <p><strong>地址:</strong> 123 Prosperity Lane, Kuala Lumpur</p>
        <p><strong>電話:</strong> +60 12-345 6789</p>
        <p><strong>營業時間:</strong> 10:00 AM - 10:00 PM (Daily)</p>
      </div>
    </section>
  );
};

export default Contact;
