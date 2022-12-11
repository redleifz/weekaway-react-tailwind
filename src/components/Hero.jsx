import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full pt-[3.5rem] h-[90vh]">
        <img
        
          src="https://images.unsplash.com/photo-1541417904950-b855846fe074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1441&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="max-w-[1140px] m-auto">
          <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
            <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
            <h2 className="text-4xl py-4 italic">With Weekaway</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe inventore consequatur maiores blanditiis cumque sint, ullam possimus sit rem eum ad repellendus dolore? Rem illum dolor blanditiis porro ipsam!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;