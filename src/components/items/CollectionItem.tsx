import React from "react";

import MediaItem from "./MediaItem";
import SlickCarousel, { SlickCarouselRef } from "../SlickCarousel";

import { ICollection } from "@/types/product";

interface Props {
  collection: ICollection;
}

const CollectionItem: React.FC<Props> = ({ collection }) => {
  const sliderRef = React.useRef<SlickCarouselRef>(null);

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-5 lg:col-span-1 flex lg:flex-col items-baseline justify-between gap-2">
        <div className="flex flex-col gap-3 mb-4 md:mb-0">
          <p className="text-gray-600 text-lg md:text-2xl font-medium text-ellipsis line-clamp-2 overflow-hidden ...">
            {collection?.title!}
          </p>
          <p className="text-xs text-gray-400 font-medium">
            {collection?.subtitle!}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => sliderRef.current && sliderRef.current?.slickPrev()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={() => sliderRef.current && sliderRef.current?.slickNext()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="col-span-5 xl:col-span-4">
        <SlickCarousel ref={sliderRef}>
          {collection?.items.map((item, index) => (
            <MediaItem key={index} item={item} />
          ))}
        </SlickCarousel>
      </div>
    </div>
  );
};

export default React.memo(CollectionItem);
