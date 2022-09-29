import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";

import dataProjects from "../../datasProjects";

import { ContainerProjects } from "./styled";

import { Cards } from "../../components/Cards";

export const Projects = () => {
  return (
    <ContainerProjects id="projects">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {dataProjects.map((item, index) => (
          <SwiperSlide key={index}>
            <Cards
              image={item.image}
              name={item.title}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </ContainerProjects>
  );
};
