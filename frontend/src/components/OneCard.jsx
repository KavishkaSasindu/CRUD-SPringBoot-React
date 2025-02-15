import React from "react";

const OneCard = ({ visible, onClose }) => {
  if (!visible) return null;
  return (
    <div>
      <div className="fixed inset-0  bg-black/20  backdrop-opacity-30 flex items-center justify-center">
        <div className="bg-white p-5 rounded-md shadow-md flex justify-center items-center w-[350px] h-auto">
          <div className="w-full h-full flex justify-center items-center ">
            <div className=" flex flex-col justify-center items-center space-y-3">
              <img
                src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                alt="profile image"
                className="w-[200px] h-[200px] object-cover border rounded-full shadow-lg flex justify-center items-center"
              />
              <div>
                <div className="w-[200px] h-auto space-y-5 flex flex-col justify-center items-start ">
                  <h1>
                    <span className="font-medium">ID</span> : 28256
                  </h1>
                  <h1>
                    <span className="font-medium">Name</span> : John Doe
                    Kavishka Sasindu
                  </h1>
                  <h1>
                    <span className="font-medium">Email</span> : user@gmail.com
                  </h1>
                  <h1>
                    <span className="font-medium">Job</span> : DevOps Engineer
                  </h1>
                  <h1>
                    <span className="font-medium">Date of Birth</span> :
                    2000-02-15
                  </h1>
                </div>
              </div>
              <button
                onClick={onClose}
                className="px-3 py-2 mt-3 rounded-sm bg-neutral-800 text-white hover:bg-neutral-200 hover:text-black transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneCard;
