import React, { useState } from 'react';
import elements1 from '../assets/images/elements1.png';
import phone from '../assets/images/phone.svg';
import star from '../assets/images/star.svg';
import email from '../assets/images/email.svg';
import checkmark from '../assets/images/checkmark.gif'; // Optional for popup

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData();
    form.append('name', formData.name);
    form.append('phone', formData.phone);
    form.append('email', formData.email);
    form.append('service', formData.service);
    form.append('message', formData.message);

    fetch('https://script.google.com/macros/s/AKfycbx5mWP8p8JPFwtM_P6edPLRYHwd-sv8qP0-ZjsZOtQAvftczujCDYcqGLvo5tlNNzmbag/exec', {
      method: 'POST',
      body: form
    })
      .then((res) => res.text())
      .then(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: ''
        });
        setIsSubmitting(false);
        if (window.bootstrap && document.getElementById('thankYouModal')) {
          const thankYouModal = new window.bootstrap.Modal(document.getElementById('thankYouModal'));
          thankYouModal.show();
        }
      })
      .catch((err) => {
        setIsSubmitting(false);
        alert('There was an error submitting the form.');
        console.error(err);
      });
  };


  return (
    <section className="contact-area p-100" id="contact">
      <div className="container">
        <div className="title-box text-center d-flex justify-content-center align-items-center position-relative">
          <h2>Contacts</h2>
          <h3><span><img src={star} alt="" /></span> Get in Touch <span><img src={star} alt="" /></span></h3>
        </div>

        <div className="row">
          <div className="col-lg-6 col-xl-5 col-xxl-4">
            <div className="contact-left">
              <form  onSubmit={handleSubmit}>
                <h3>Leave a message</h3>
                <input type="text" id="name" placeholder="Full name" value={formData.name} onChange={handleChange} required />
                <input type="tel" id="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                <input type="email" id="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                <select id="service" value={formData.service} onChange={handleChange} required>
                  <option value="">Service Type</option>
                  <option value="Logo Design">Logo Design</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Business Analysis">Business Analysis</option>
                  <option value="Web Design">Web Design</option>
                  <option value="App Design & Development">App Design & Development</option>
                  <option value="SEO Marketing">SEO Marketing</option>
                </select>
                <textarea id="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-6 col-xl-7 col-xxl-8">
            <div className="contact-right">
              <div className="txt-box d-xl-flex align-items-center">
                <h1>Get In <span>Touch</span></h1>
                <h4>
                  today
                  <img src={elements1} className="dots1" alt="" />
                  <img src={elements1} className="dots2" alt="" />
                  <img src={elements1} className="dots3" alt="" />
                  <img src={elements1} className="dots4" alt="" />
                </h4>
              </div>
              <p>
                "Have a project in mind or just want to say hello? Feel free to reach out — I’m always open to discussing new ideas, creative work, or opportunities to collaborate."
              </p>
              <ul className="d-xxl-flex">
                <li className="d-flex align-items-center">
                  <div className="icon"><img src={phone} alt="" /></div>
                  <div className="icon-content">
                    <h3 className="mb-2">Call</h3>
                    <a href="tel:7001906952">7001906952</a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="icon"><img src={email} alt="" /></div>
                  <div className="icon-content">
                    <h3 className="mb-2">Mail</h3>
                    <a href="mailto:subrata291291@gmail.com">subrata291291@gmail.com</a>
                  </div>
                </li>
              </ul>
              <iframe className="mt-5 d-lg-none d-xl-block"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.291556014612!2d88.42368324394353!3d22.576377035302546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020703c0d%3A0xece6f8e0fc2e1613!2sSector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1751968693522!5m2!1sen!2sin"
                width="100%" height="150" style={{ border: 0 }}
                allowFullScreen loading="lazy" title="Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Modal */}
      <div className="thank-you-modal modal fade" id="thankYouModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-center">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src={checkmark} alt="Thank You" width="80" />
              <h4 className="mt-3">Thanks for contacting us. We will get back to you shortly.</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
