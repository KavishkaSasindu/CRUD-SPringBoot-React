import axios from "axios";
import React, { useEffect, useState } from "react";
import UpdateForm from "./UpdateForm";

const Update = ({ id }) => {
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
          Update
        </button>
        <UpdateForm visible={showModel} onClose={handleOnClose} id={id} />
      </div>
    </div>
  );
};

export default Update;
