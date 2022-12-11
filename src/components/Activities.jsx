import React from "react";

const Activitise = () => {
  return (
    <>
      <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
        <div className="relative p-4">
          <h3 className="absolute z-[5] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
            Resorts
          </h3>
          <img
            className="w-full h-full object-cover relative border-4 border-white shadow-lg"
            src="https://images.unsplash.com/photo-1584132869994-873f9363a562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="/"
          />
        </div>
        <div className="relative p-4">
          <h3 className="absolute z-[5] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
            Cruises
          </h3>
          <img
            className="w-full h-full object-cover relative border-4 border-white shadow-lg"
            src="https://images.unsplash.com/photo-1548574505-12caf0050b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="/"
          />
        </div>
        <div className="relative p-4">
          <h3 className="absolute z-[5] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Excursion
          </h3>
          <img
            className="w-full h-full object-cover relative border-4 border-white shadow-lg"
            src="https://images.unsplash.com/photo-1510637858650-c3be04731622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="/"
          />
        </div>
      </div>
    </>
  );
};

export default Activitise;
