import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider, { Settings } from "react-slick";

interface Props {
  children: React.ReactNode;
}

export interface SlickCarouselRef {
  slickPrev: () => void;
  slickNext: () => void;
}

const SlickCarousel = React.forwardRef<SlickCarouselRef, Props>(
  ({ children }, ref) => {
    const sliderRef = React.useRef<Slider>(null);

    const [responsiveSettings, setResponsiveSettings] =
      React.useState<Settings>({
        dots: false,
        infinite: true,
        speed: 500,
        initialSlide: 0,
        arrows: false,
      });

    React.useEffect(() => {
      const updateResponsiveSettings = () => {
        const width = window.innerWidth;

        if (width <= 450) {
          setResponsiveSettings({
            ...responsiveSettings,
            slidesToShow: 1,
            slidesToScroll: 1,
          });
        } else if (width <= 768) {
          setResponsiveSettings({
            ...responsiveSettings,
            slidesToShow: 2,
            slidesToScroll: 2,
          });
        } else if (width <= 1024) {
          setResponsiveSettings({
            ...responsiveSettings,
            slidesToShow: 3,
            slidesToScroll: 3,
          });
        } else {
          setResponsiveSettings({
            ...responsiveSettings,
            slidesToShow: 4,
            slidesToScroll: 4,
          });
        }
      };

      updateResponsiveSettings();

      window.addEventListener("resize", updateResponsiveSettings);

      return () => {
        window.removeEventListener("resize", updateResponsiveSettings);
      };
    }, []);

    React.useImperativeHandle(ref, () => ({
      slickPrev() {
        if (sliderRef.current) sliderRef.current?.slickPrev();
      },
      slickNext() {
        if (sliderRef.current) sliderRef.current?.slickNext();
      },
    }));

    return (
      <Slider ref={sliderRef} {...responsiveSettings}>
        {children}
      </Slider>
    );
  }
);

export default SlickCarousel;
