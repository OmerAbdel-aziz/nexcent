import React from "react";
import iconImage from "../assets/icons/icon.png";
import handsIconImage from "../assets/icons/handsIcon.png";
import clickIconImage from "../assets/icons/clickIcon.png";
import fileIconImage from "../assets/icons/fileIcon.png";

const Analytics = () => {
  return (
    <section
      id=""
      className="flex flex-col lg:flex-row gap-10 w-full max-container p-4 lg:p-0"
    >
      <div className="flex flex-1 flex-col justify-center items-start w-full lg:px-8">
        <h1 className="font-montserrat text-gray-d text-4xl lg:text-5xl xl:text-6xl leading-tight lg:leading-tight xl:leading-[96px] font-semibold">
          Helping a local <br />
          <span className="text-primary">business reinvent itself</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-base lg:text-lg xl:text-xl leading-6 lg:leading-8 mt-6 mb-10 xl:mb-14">
          We reached here with our hard work and dedication.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mb-5">
          <img
            src={iconImage}
            alt="icon"
            className="w-10 h-10 object-contain"
          />
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-gray-d font-montserrat text-3xl font-bold">
              2,245,341
            </h2>
            <p className="font-montserrat text-slate-gray text-base xl:text-lg leading-6 xl:leading-8">
              Members
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mb-5">
          <img
            src={handsIconImage}
            alt="hands"
            className="w-10 h-10 object-contain"
          />
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-gray-d font-montserrat text-3xl font-bold">
              46,328
            </h2>
            <p className="font-montserrat text-slate-gray text-base xl:text-lg leading-6 xl:leading-8">
              Clubs
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mb-5">
          <img
            src={clickIconImage}
            alt="click"
            className="w-10 h-10 object-contain"
          />
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-gray-d font-montserrat text-3xl font-bold">
              2,245,341
            </h2>
            <p className="font-montserrat text-slate-gray text-base xl:text-lg leading-6 xl:leading-8">
              Members
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mb-5">
          <img
            src={fileIconImage}
            alt="file"
            className="w-10 h-10 object-contain"
          />
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-gray-d font-montserrat text-3xl font-bold">
              46,328
            </h2>
            <p className="font-montserrat text-slate-gray text-base xl:text-lg leading-6 xl:leading-8">
              Clubs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
