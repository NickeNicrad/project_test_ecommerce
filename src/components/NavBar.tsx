import React from "react";
import Image from "next/image";

import logo from "../../public/images/logo.png";
import arrow_down from "../../public/images/arrow_down.png";

function NavBar() {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-3 p-3">
      <div className="flex gap-3 items-center justify-between">
        <Image height={25} src={logo} alt="App Logo" />
        <div className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            fill="currentColor"
            className="w-4 h-4 mt-0.5"
            style={{ color: "#1ed49d" }}
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="text-md" style={{ color: "#1ed49d" }}>
            카테고리
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-3 border border-gray-200 p-3 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <input
          className="bg-transparent outline-none w-full lg:w-80 text-sm"
          placeholder="쇼핑할지 말지 고민된다면 검색해 보세요"
        />
      </div>
      <div className="hidden xl:flex justify-evenly items-center gap-3">
        <Image height={22} src={arrow_down} alt="App Logo" />
        <div className="inline-block h-3.5 w-px self-stretch bg-gray-300 mt-4" />
        <h1 className="text-sm">로그인 / 회원가입</h1>
      </div>
    </div>
  );
}

export default NavBar;
