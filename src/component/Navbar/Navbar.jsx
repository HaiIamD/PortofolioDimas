import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { ImCross } from 'react-icons/im';
import { AiOutlineVerticalAlignTop } from 'react-icons/ai';
import { MdOutlineWbSunny } from 'react-icons/md';
import { BsMoonStars } from 'react-icons/bs';
import useLocalStorage from 'use-local-storage';
import { Link, animateScroll as scroll } from 'react-scroll';
import { SiDeutschebank } from 'react-icons/si';
import { TfiFaceSmile } from 'react-icons/tfi';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

function Navbar({ handleChange, data }) {
  const [darkMode, setDarkMode] = useLocalStorage(true);
  const [navbar, setNavbar] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [flowUp, setFlowUp] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    if (window.scrollY >= 3150) {
      setFlowUp(true);
    } else {
      setFlowUp(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <div className={`col-12 py-3 d-flex justify-content-center test ${navbar ? 'addBg' : ''} `}>
        <div className="col-11  d-flex flex-wrap align-items-center justify-content-between  ">
          <div className="navLogo">{data.title}</div>
          <div className="sideCommon">
            <Link to="project" smooth={true} duration={100} offset={-100}>
              <span className={`${navbar ? 'cursorLogo' : 'navItems'} px-2`}>Project</span>
            </Link>
            <Link to="tools" smooth={true} duration={100} offset={-100}>
              <span className={`${navbar ? 'cursorLogo' : 'navItems'} px-2`}>Tools</span>
            </Link>
            <Link to="contact" smooth={true} duration={100} offset={-100}>
              <span className={`${navbar ? 'cursorLogo' : 'navItems'} px-2`}>Contact</span>
            </Link>
          </div>
          {!sideBar && <SiDeutschebank className="hamburger" size={22} onClick={() => setSideBar(true)} />}
        </div>
      </div>
      {sideBar ? (
        <div className="col-12 d-flex flex-wrap absoluteNavbar vh-100">
          <div className="col-4 leftAbsolute" onClick={() => setSideBar(false)}></div>
          <div className="col-8 d-flex flex-column p-5  rounded-start-4 rightAbosolute">
            <p className="d-flex justify-content-end">
              <ImCross className="hamburger" size={22} onClick={() => setSideBar(false)} />
            </p>
            <Link className="my-3 navItems" to="project" smooth={true} duration={100} offset={-80}>
              <span>Project</span>
            </Link>
            <Link className="my-3 navItems" to="tools" smooth={true} duration={100} offset={-35}>
              <span>Tools</span>
            </Link>
            <Link className="my-3 navItems" to="contact" smooth={true} duration={100} offset={-90}>
              <span>Contact</span>
            </Link>
          </div>
        </div>
      ) : (
        ''
      )}
      {navbar ? (
        <div className={`d-flex rounded-4 ms-2 p-2 ${flowUp ? ' fixedUp ' : 'up'}`}>
          <span
            className=" darkMode p-2 text-center"
            onClick={() => {
              handleChange();
              setDarkMode(!darkMode);
            }}
          >
            {darkMode ? <BsMoonStars size={28} className="iconDarkmode" /> : <MdOutlineWbSunny size={30} className="iconDarkmode" />}
          </span>
          {flowUp && (
            <span className="darkMode p-2">
              <Tooltip id="my-tooltip" place="right" />
              <TfiFaceSmile
                size={30}
                className=" smileFace"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="
            Hello everyone! Thank you for visiting my website!👋✨"
              />
            </span>
          )}
          <span className="icon  mt-1">
            <AiOutlineVerticalAlignTop size={30} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          </span>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default Navbar;
