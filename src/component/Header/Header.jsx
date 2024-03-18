import React from 'react';
import './Header.css';
import CountUp from 'react-countup';
import { Link, animateScroll as scroll } from 'react-scroll';

function Header({ data }) {
  return (
    <div className=" py-2">
      <div className="d-flex flex-wrap justify-content-center">
        <p className="titleHeader col-11 col-sm-12">
          I’m <span className="underlineAndBold">{data.nameHeader}</span> , {data.titleHeader}
        </p>
      </div>
      <div className="imageBorder">
        <img src={data.imageHeader} alt="gambarUser" className="img-fluid col-11 col-sm-12 imageHeader" />
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        <div className="col-11 col-md-6 d-flex flex-column">
          <span className="textKecil">I’am {data.userName}</span>
          <p className="textBesar col-12 col-md-10">{data.strength}</p>
          <a href={data.resume} className="col-12 col-md-7 col-lg-5   mb-3 rounded-4  d-flex align-items-center justify-content-center buttonHeader">
            Download Resume
          </a>
        </div>
        <div className="col-11 col-md-6 ">
          <p className="textKecil">{data.description}</p>
          <div className="d-flex flex-wrap align-items-center">
            <div className="d-flex flex-column numberHeader  col-6 col-sm-4">
              <span className="textBesarNumber">
                <CountUp start={0} end={`${data.complateProject}`} duration={4} /> +
              </span>
              <span className="textKecil">Complete Project</span>
            </div>
            <div className="d-flex flex-column numberHeader col-6 col-sm-4 col-lg-5">
              <span className="textBesarNumber">
                <CountUp start={0} end={`${data.proficientInExpertise}`} duration={4} /> +
              </span>
              <span className="textKecil">Proficient in expertise</span>
            </div>
            <Link
              className="col-12 col-sm-4 col-xl-3 d-flex align-items-center justify-content-center  rounded-4 buttonHeader "
              to="contact"
              smooth={true}
              duration={500}
              offset={-20}
            >
              Let's Talk ....
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
