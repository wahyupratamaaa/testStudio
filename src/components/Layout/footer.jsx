import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 bg-blue-400 text-white ">
      <div className="w-full mx-auto px-10 py-16">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700">
              Informasi terbaru dan terpercaya
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Mengenai teknologi hanya di News Tech Terkini.
            </h5>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto"></div>
              <div className="w-full lg:w-4/12 px-4"></div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
