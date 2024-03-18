import React, { useState } from 'react';
import './Project.css';

import { Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function Project({ data }) {
  const [moreProject, setMoreProject] = useState(3);
  const [showMore, setShowMore] = useState(false);

  const sliceData = data.length > 0 ? data.slice(0, moreProject) : [];

  return (
    <>
      <div className="d-flex flex-wrap  my-4 " id="project">
        <div className="d-flex flex-wrap projectImageKecil col-12 col-md-6 pe-2">
          <div className="col-11 col-md-12  borderImage rounded-4">
            <img src="assets/1.png" alt="image" className="img-fluid col-12" />
          </div>
          <span className="titleProject col-11 col-md-6">PROJECT SHOWCASE</span>
        </div>
        <div className="d-flex flex-wrap  col-12 col-md-6 ps-2 ">
          <div className="col-11 col-md-12 borderImageBesar ">
            <img src="assets/5.png" alt="image" className="img-fluid col-12" />
          </div>
        </div>
      </div>
      {sliceData.map((data, i) => (
        <div className="d-flex flex-wrap align-items-center justify-content-center my-5 " key={i}>
          <Swiper
            className="col-11 col-lg-4"
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={50}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            slidesPerView={1}
          >
            {data.image.map((image, i) => (
              <SwiperSlide key={i}>
                <img src={image} alt="image" className="img-fluid" key={i} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="d-flex flex-column col-11 col-lg-8 descProject">
            <span className="textBesar my-1">{data.title}</span>
            <span className="textKecil my-1">{data.technology}</span>
            <span className="textKecil my-1">{data.description}</span>
            <a href={data.link} target="_blank" rel="noopener noreferrer" className="col-12 buttonHeader rounded-4 text-center py-2">
              {data.link}
            </a>
          </div>
        </div>
      ))}

      {!showMore && (
        <p
          className="textKecilProject my-3 text-center"
          onClick={() => {
            setMoreProject(data.length), setShowMore(true);
          }}
        >
          Show All Project ...
        </p>
      )}
      {showMore && (
        <p
          className="textKecilProject my-3 text-center"
          onClick={() => {
            setMoreProject(3), setShowMore(false);
          }}
        >
          Minimize Project ...
        </p>
      )}
    </>
  );
}

export default Project;
