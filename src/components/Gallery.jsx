import React from "react";

const Gallery = () => {
  return (
    <>
      <div id="gallery" className="max-w-[1140px] m-auto w-full p-4 py-16">
        <h2 className="text-center text-gray-700 p-4">Gallery</h2>
            <div className="grid sm:grid-cols-5 gap-4">
                <div className="sm:col-span-3 col-span-2 row-span-2">
                    <img className="w-full h-full object-cover"src="https://images.unsplash.com/photo-1500514966906-fe245eea9344?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
                </div>
                <div>
                    <img className="w-full h-full object-cover"src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80" alt="" />
                </div>
                <div>
                    <img className="w-full h-full object-cover"src="https://images.unsplash.com/photo-1567439393571-b5f32ddf9b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="" />
                </div>
                <div>
                    <img className="w-full h-full object-cover"src="https://images.unsplash.com/photo-1544945582-3b466d874eac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="" />
                </div>
                <div>
                    <img className="w-full h-full object-cover"src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                </div>
            </div>
      </div>
    </>
  );
};

export default Gallery;
