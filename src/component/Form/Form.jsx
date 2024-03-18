import React from 'react';
import './Form.css';

function Form() {
  return (
    <>
      {/* Here You can use : formsubmit or email js , for send Email withOut Be */}
      <div className="d-flex flex-wrap col-12">
        <div className="d-flex flex-column my-4 col-12">
          <label htmlFor="name" className="textKecil">
            Name
          </label>
          <input type="text" id="name" name="name" className="formInputan py-2" required placeholder="Enter Your Name" />
        </div>
        <div className="d-flex flex-column my-4 col-12">
          <label htmlFor="email" className="textKecil">
            Email
          </label>
          <input type="email" id="email" name="email" className="formInputan py-2" required placeholder="Enter Your Email" />
        </div>
        <div className="d-flex flex-column my-4 col-12">
          <label htmlFor="message" className="textKecil">
            Messager
          </label>
          <input type="text" id="message" name="message" className="formInputan py-2" required placeholder="Please Type Your Message Here" />
        </div>
        <button className="buttonForm rounded-2 p-3 mt-3 mb-5 col-12">Send Message ...</button>
      </div>
    </>
  );
}

export default Form;
