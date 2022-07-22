import React, { useState } from 'react';
import PmcvData from '../../PmcvData';
import ContactCard from '../../Common/ContactCard';

const Index = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('name', name);
    console.log('email', email);
    console.log('message', message);
    setName('');
    setEmail('');
    setMessage('');
  };

  const contactElements = PmcvData.filter(
    (items) => items.name === 'contact'
  )[0];

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
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="pm-group is-grow">
                  <label>Email</label>
                  <input
                    type="text"
                    placholder="name"
                    className="pm-control"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
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
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="is-btn is-btn_primary">
                <span>submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
