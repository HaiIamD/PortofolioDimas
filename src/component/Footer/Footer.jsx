import React from 'react';
import './Footer.css';

function Footer({ data }) {
  return (
    <>
      <div className="d-flex flex-wrap Footer  py-3 px-5 mt-5 container-fluid">
        <div className="col-11 col-sm-6 navLogo logoFooter  ">dimm's</div>
        <div className="col-11 col-sm-6 d-flex FooterRightSide ">
          <div className="d-flex flex-column  mx-2">
            <a href={data[0].link} target="_blank" rel="noopener noreferrer" className="footerText my-1">
              {data[0].title}
            </a>
            <a href={data[1].link} target="_blank" rel="noopener noreferrer" className="footerText my-1">
              {data[1].title}
            </a>
            <a href={data[2].link} target="_blank" rel="noopener noreferrer" className="footerText my-1">
              {data[2].title}
            </a>
          </div>
          <div className=" d-flex flex-column  mx-2">
            <a href={data[3].link} target="_blank" rel="noopener noreferrer" className="footerText my-1">
              {data[3].title}.
            </a>
            <a href={data[4].link} target="_blank" rel="noopener noreferrer" className="footerText my-1">
              {data[4].title}
            </a>
            <a href={data[5].link} target="_blank" rel="noopener noreferrer" className="footerText my-1">
              {data[5].title}
            </a>
            <a href={data[6].link} target="_blank" rel="noopener noreferrer" className="footerText my-1">
              {data[6].title}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
