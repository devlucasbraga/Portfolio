import React from "react";
import { ContentSlide } from "./styled";

export const SliderContent = ({ activeIndex, imageSlider }) => {
  return (
    <ContentSlide>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.image} alt={slide.title} />
          <div>
            <h2 className="slide-title">{slide.title}</h2>
            <h3 className="slide-description">{slide.description}</h3>
          </div>
        </div>
      ))}
    </ContentSlide>
  );
};
