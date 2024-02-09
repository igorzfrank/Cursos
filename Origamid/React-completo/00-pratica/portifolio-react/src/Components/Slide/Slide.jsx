import React from "react";
import "./Slide.css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img01 from "../../assets/img/slide-01.png";
import img02 from "../../assets/img/slide-02.png";
import img03 from "../../assets/img/slide-03.png";
import UserContext from "../../UserContext";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slide = () => {
  const { data } = React.useContext(UserContext);
  console.log(data.about.slide[0].firstText);
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
    >
      <SwiperSlide>
        <div className="slide">
          <img src={img01} alt="" />
          <div className="slideContent border">
            <p>
              {data.about.slide[0].firstText}
              <strong>{data.about.slide[0].firstTextStrong}</strong>
            </p>
            <p>
              {data.about.slide[0].secondText}
              <strong>{data.about.slide[0].secondTextStrong}</strong>
              {data.about.slide[0].secondTextMore}
            </p>
            <p>{data.about.slide[0].thirdText}</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <img src={img02} alt="" />
          <div className="slideContent border">
            <p>
              {data.about.slide[1].firstText}
              <strong>{data.about.slide[1].firstTextStrong}</strong>
            </p>
            <p>
              {data.about.slide[1].secondText}
              <strong>{data.about.slide[1].secondTextStrong}</strong>
            </p>
            <p>{data.about.slide[1].thirdText}</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <img src={img03} alt="" />
          <div className="slideContent border">
            <p>
              {data.about.slide[2].firstText}
              <strong>{data.about.slide[2].firstTextStrong}</strong>
            </p>
            <p>
              {data.about.slide[2].secondText}
              <strong>{data.about.slide[2].secondTextStrong}</strong>
              {data.about.slide[2].secondTextMore}
            </p>
            <p>
              {data.about.slide[2].thirdText}
              <strong>{data.about.slide[2].thirdTextStrong}</strong>
            </p>
          </div>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Slide;
