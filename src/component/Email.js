import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6zsm4e5', 'template_2zoud69', form.current,'rfumYm7z2Q4zF-yjf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="text-start py-2">
      <label>Name</label>
      <input type="text" className='form-control' name="name" />
      <label>Email</label>
      <input type="email" className='form-control' name="email" />
      <label>Message</label>
      <textarea className='form-control' name="message" />
      <input type="submit" className='btn btn-primary mt-3' value="Send" />
    </form>
  );
};

export default Email;