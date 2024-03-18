import React from 'react';
import './Contact.css';
import { SiLinkedin } from 'react-icons/si';
import { BiLogoGmail } from 'react-icons/bi';
import { FaInstagram } from 'react-icons/fa6';
import { FaSquareGithub } from 'react-icons/fa6';
import Form from '../Form/Form';

function Contact({ data, setLoading }) {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center my-4" id="contact">
        <div className="col-11 col-md-4 d-flex flex-column">
          <div className="borderGambarConnect">
            <img src="assets/2.png" alt="image" className="img-fluid col-12 gambarConnect" />
          </div>
          <div className="d-flex socialmedia">
            <a
              href={data.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="textSocialMedia rounded-2 p-2 my-1 d-flex flex-wrap align-items-center"
            >
              <SiLinkedin className="me-1 iconContact" /> LinkedIn
            </a>
            <a href={`mailto:${data.gmail}`} className="textSocialMedia rounded-2 p-2 my-1 d-flex flex-wrap align-items-center">
              <BiLogoGmail className="me-1 iconContact" /> Gmail
            </a>
            <a
              href={data.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="textSocialMedia rounded-2 p-2 my-1 d-flex flex-wrap align-items-center"
            >
              <FaInstagram className="me-1 iconContact" /> Instagram
            </a>
            <a href={data.github} target="_blank" rel="noopener noreferrer" className="textSocialMedia rounded-2 p-2 my-1 d-flex flex-wrap align-items-center">
              <FaSquareGithub className="me-1 iconContact" /> Github
            </a>
          </div>
        </div>
        <div className="col-11 col-md-8 d-flex flex-wrap justify-content-center connectSide ">
          <div className="backgroundImageContact col-12 rounded-4">
            <img src="assets/4.png" alt="image" className="img-fluid col-12" />
          </div>
          <div className="d-flex justify-content-between mt-3">
            <div className="backgroundImageContact col-4 pe-2 ">
              <img src="assets/5.png" alt="image" className="img-fluid col-12" />
            </div>
            <div className="backgroundImageContact col-8 ps-2 ">
              <img src="assets/6.png" alt="image" className="img-fluid col-12" onLoad={() => setLoading(true)} />
            </div>
          </div>
          <div className="warnaHr py-1 mt-3 " />
          <div className=" connectTittle col-12">Connect with me</div>
          <Form />
        </div>
      </div>
    </>
  );
}

export default Contact;
