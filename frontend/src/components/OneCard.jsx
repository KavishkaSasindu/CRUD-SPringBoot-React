import React from "react";

const OneCard = ({ visible, onClose }) => {
  if (!visible) return null;
  return (
    <div>
      <div className="fixed inset-0  bg-black/20  backdrop-opacity-30 flex items-center justify-center">
        Hello One User Data
        <button onClick={onClose} className="px-3 py-2 bg-rose-300">
          Close
        </button>
      </div>
    </div>
  );
};

export default OneCard;
