import React from "react";
import { useState } from "react";
import OneCard from "./OneCard";

const Card = () => {
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
        <button onClick={showComponent}>Read Data</button>
        <OneCard visible={showModel} onClose={handleOnClose} />
      </div>
    </div>
  );
};

export default Card;
