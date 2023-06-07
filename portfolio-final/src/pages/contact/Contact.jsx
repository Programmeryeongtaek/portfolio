import React, { useState } from 'react';
import './contact.css';
import { FaRegAddressBook, FaRegEnvelope, FaRegMap, FaRegUser } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(
      'https://sheet.best/api/sheets/451665c0-b15b-4eb0-8747-f0ddbd942112', form
    ).then((response) => {
      setForm({ name: '', email: '', subject: '', message: '' });
    });
  };

  return (
    <main className='section container'>
      <secton className="contact">
        <h2 className="section__title">
          Contact <span>Me</span>
        </h2>

        <div className="contact__container container grid">
          <div className="contact__content">
            <div className="contact__card">
              <span className="contact__card-icon">
                <FaRegMap />
              </span>

              <h3 className="contact__card-title">주소</h3>
              <p className="contact__card-data">용산구 보광동</p>
            </div>

            <div className="contact__card">
              <span className="contact__card-icon">
                <FaRegUser />
              </span>

              <h3 className="contact__card-title">이름</h3>
              <p className="contact__card-data">오영택</p>
            </div>

            <div className="contact__card">
              <span className="contact__card-icon">
                <FaRegEnvelope />
              </span>

              <h3 className="contact__card-title">이메일</h3>
              <p className="contact__card-data">yeongtaek2109@gmail.com</p>
            </div>

            <div className="contact__card">
              <span className="contact__card-icon">
                <FaRegAddressBook />
              </span>

              <h3 className="contact__card-title">전화번호</h3>
              <p className="contact__card-data">010-4135-9209</p>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group grid">
              <div className="contact__form-div">
                <label className="contact__form-tag">
                  이름 <b>*</b>
                </label>
                <input 
                  type="text" 
                  name='name'
                  onChange={handleChange}
                  value={form.name}
                  required
                  className="contact__form-input"
                />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag">
                  이메일 <b>*</b>
                </label>
                <input
                  type="email"
                  name='email'
                  onChange={handleChange}
                  value={form.email}
                  required
                  className='contact__form-input' 
                />
              </div>
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">
                제목 <b>*</b>
              </label>
              <input
                type="text"
                name='subject'
                onChange={handleChange}
                value={form.subject}
                required 
                className="contact__form-input"
              />
            </div>
          
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">
                내용 <b>*</b>
              </label>
              <textarea 
                name="message"
                onChange={handleChange}
                value={form.message}
                className='contact__form-input'
              ></textarea>
            </div>
          </form>
        </div>

        <div className="contact__submit">
          <button type='submit' className="contact__btn">
            전송하기
          </button>
        </div>
      </secton>
    </main>
  );
};

export default Contact;