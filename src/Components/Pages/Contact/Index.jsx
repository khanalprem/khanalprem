import React, { useState, useEffect } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import PmcvData from '../../PmcvData';
import ContactCard from '../../Common/ContactCard';
import { Link } from 'react-router-dom';

const Index = () => {
  const [toggle, setToggle] = useState(false);
  const [state, setState] = useState({ name: '', email: '', message: '' });

  const toggleClose = () => {
    setToggle(false);
  };
  const onChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.name === '' || state.email === '' || state.message === '') return;

    setToggle(true);
    fetch('https://formspree.io/f/xbjwnkkw', {
      method: 'POST',
      body: JSON.stringify({
        name: state.name,
        email: state.email,
        message: state.message,
      }),
    });
  };

  const contactElements = PmcvData.filter(
    (items) => items.name === 'contact'
  )[0];

  useEffect(() => {
    document.title = 'Contact';
  }, []);

  return (
    <main className="contact-page">
      <div className="contact-page_title mb-30">
        <h3 className="is-capitalize">{contactElements.name}</h3>
      </div>
      <div className="contact-page_body">
        <div className="row">
          <div className="grid-md-5">
            <ContactCard />
          </div>
          <div className="grid-md-7">
            <form onSubmit={handleSubmit}>
              <div className="is-flex is-between is-align-center is-gap-15">
                <div className="pm-group is-grow">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placholder="name"
                    className="pm-control"
                    value={state.name}
                    onChange={onChange}
                  />
                </div>
                <div className="pm-group is-grow">
                  <label>Email</label>
                  <input
                    type="text"
                    placholder="name"
                    className="pm-control"
                    name="email"
                    value={state.email}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="pm-group">
                <label>Your Message</label>
                <textarea
                  type="text"
                  placholder="name"
                  className="pm-control"
                  name="message"
                  rows={5}
                  value={state.message}
                  onChange={onChange}
                ></textarea>
              </div>
              <button type="submit" className="is-btn is-btn_primary">
                <span>submit</span>
              </button>
            </form>
          </div>
        </div>

        <div className={toggle ? 'pm-modal pm-modal_show' : 'pm-modal'}>
          <div className="pm-modal_cntr pm-modal_cntr_sm">
            <div className="pm-modal_close" onClick={() => toggleClose()}>
              <IoCloseCircleOutline />
            </div>

            <div className="pm-modal_body">
              <div className="is-flex is-center is-column is-align-center is-text-center mt-15">
                <h3>Thank you for getting in touch! </h3>
                <div className="cotent mt-20">
                  <p className="mb-20">
                    I have received your message and would like to thank you for
                    writing to me.I will reply by email as soon as possible.
                  </p>
                </div>
              </div>
            </div>
            <div className="pm-modal_footer is-flex is-center is-align-center">
              <Link to="/">
                <button className="is-btn is-btn_primary">
                  <span>Back to Home</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
