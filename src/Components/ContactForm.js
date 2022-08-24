import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ezbeb5l',
        'template_2mydes8',
        form.current,
        'vCX55Uf_XmIqoepid'
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert('Message Sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col sm:mx-2 mx-4 sm:mt-2 mt-4 sm:mb-4 mb-8 w-2/4 lg:w-3/5"
    >
      <label className="text-left">Name</label>
      <input
        type="text"
        name="user_name"
        className="border-2 rounded-lg px-2"
      />
      <label className="text-left">Email</label>
      <input
        type="email"
        name="user_email"
        className="border-2 rounded-lg px-2"
      />
      <label className="text-left">Message</label>
      <textarea
        name="message"
        className="border-2 rounded-lg px-2 h-28 sm:h-20 mb-2"
      />
      <input
        type="submit"
        value="Send"
        className="rounded-lg px-2 bg-orange-600 text-slate-200 hover:scale-105"
      />
    </form>
  );
};

export default ContactUs;
