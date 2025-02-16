import React from "react";
import { useState } from "react";
import OneCard from "./OneCard";

const Card = ({ id }) => {
  const [showModel, setShowModel] = useState(false);
  const showComponent = () => {
    setShowModel(true);
  };

  const handleOnClose = () => {
    setShowModel(false);
  };
  return (
    <div>
      <div>
        <button
          onClick={showComponent}
          className="px-3 py-2 mt-3 rounded-sm bg-neutral-800 text-white hover:bg-neutral-200 hover:text-black transition-all duration-300 "
        >
          Read Data
        </button>
        <OneCard visible={showModel} onClose={handleOnClose} id={id} />
      </div>
    </div>
  );
};

export default Card;
