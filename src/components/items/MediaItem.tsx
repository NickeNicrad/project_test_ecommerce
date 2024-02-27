import React from "react";
import Image from "next/image";

import { IItem } from "@/types/product";

interface Props {
  item: IItem;
}

const MediaItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="mb-4 md:mr-4">
      <Image
        alt=""
        src={`${item?.publication?.media[0]?.uri!}`}
        width={200}
        height={200}
        className="w-full top-0 left-0"
      />
      <p className="text-gray-600">{item?.publication?.productName}</p>
      <div className="flex">
        <p className="text-red-500 font-medium text-xl">
          {item.publication?.priceInfo?.discountRate &&
            `${item.publication?.priceInfo?.discountRate}%`}
        </p>
        <p className="text-gray-600 font-medium text-xl">
          {item?.publication?.priceInfo?.price.toLocaleString()}
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-3 h-3"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xs text-gray-500 font-semibold">
            {item.publication?.rating}
          </span>
        </div>
        <span className="inline-block h-2.5 w-px self-stretch bg-gray-300 mt-1" />
        <span className="text-xs text-gray-500 font-semibold">
          {item.publication?.brandName}
        </span>
      </div>
    </div>
  );
};

export default React.memo(MediaItem);
