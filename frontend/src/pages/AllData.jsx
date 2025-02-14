import React, { useState } from "react";
import Create from "../components/Create";
import Card from "../components/Card";

const AllData = () => {
  const [showModel, setShowModel] = useState(false);
  const showComponent = () => {
    setShowModel(true);
  };

  const handleOnClose = () => {
    setShowModel(false);
  };

  return (
    <div>
      <div className="fixed  w-[100%] h-[8%] bg-cyan-900">
        <div className="flex justify-between">
          <h1 className="text-white mt-2 ml-2 text-xl">Dashboard</h1>
        </div>
      </div>
      <div className="w-[100%] h-screen flex  items-center ">
        <div className="w-[15%]  h-full bg-gray-300/15 shadow-md shadow-gray-300">
          <div className=" w-full  mt-[80px] flex items-center justify-center">
            <div className="w-full h-full ml-5 space-y-3">
              <button
                onClick={showComponent}
                className="px-3 py-1 rounded-sm bg-emerald-600 text-white hover:bg-slate-300 hover:text-black transition-all duration-200"
              >
                Add User
              </button>
            </div>
          </div>
        </div>
        <div className="w-[80%] h-full">
          <div className="w-[100%] border h-[630px] mt-[80px] ml-10 overflow-y-scroll no-scrollbar scroll-smooth">
            <div className="w-[200px] h-[300px] border"></div>
            <div className="w-[200px] h-[300px] border"></div>
            <div className="w-[200px] h-[300px] border"></div>
            <div className="w-[200px] h-[300px] border"></div>
            <Card />
          </div>
        </div>
      </div>
      <Create onClose={handleOnClose} visible={showModel} />
    </div>
  );
};

export default AllData;
