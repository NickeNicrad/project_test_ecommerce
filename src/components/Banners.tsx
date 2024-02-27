"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useGetBanners } from "@/services/queries";

function Banners() {
  const bannerQuery = useGetBanners();

  const [centerSlidePercentage, setCenterSlidePercentage] =
    React.useState<number>(68);

  React.useEffect(() => {
    const updateResponsiveSettings = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setCenterSlidePercentage(94);
      } else if (width <= 1024) {
        setCenterSlidePercentage(80);
      } else {
        setCenterSlidePercentage(68);
      }
    };

    updateResponsiveSettings();

    window.addEventListener("resize", updateResponsiveSettings);

    return () => {
      window.removeEventListener("resize", updateResponsiveSettings);
    };
  }, []);

  if (bannerQuery.isLoading) return <p>Loading...</p>;

  if (bannerQuery.isError) return <p>{bannerQuery?.error?.message}</p>;

  if (bannerQuery.data?.length === 0) return <p>No item available</p>;

  return (
    <Carousel
      centerMode
      selectedItem={2}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      centerSlidePercentage={centerSlidePercentage}
      renderArrowPrev={(clickHandler, hasPrev) =>
        hasPrev && (
          <div className="flex flex-col items-center justify-center absolute h-full left-6 xl:left-80 lg:left-48 md:left-28 z-10 h-full">
            <button
              className="bg-gray-400 rounded-full shadow-lg p-1 md:p-3"
              onClick={() => clickHandler()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )
      }
      renderArrowNext={(clickHandler, hasNext) =>
        hasNext && (
          <div className="flex flex-col items-center justify-center absolute h-full right-6 xl:right-80 lg:right-48 md:right-28 top-0 z-10">
            <button
              className="bg-gray-400 rounded-full shadow-lg p-1 md:p-3"
              onClick={() => clickHandler()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )
      }
    >
      {bannerQuery.data?.map((item, index) => (
        <div key={index} className="mx-1 xl:mx-4 md:mx-2">
          <img src={item?.pcImageUrl!} />
        </div>
      ))}
    </Carousel>
  );
}

export default Banners;
