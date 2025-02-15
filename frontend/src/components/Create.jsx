import React from "react";

const Create = ({ onClose, visible }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0  bg-black/20  backdrop-opacity-30 flex items-center justify-center">
      <div className=" w-[40%] h-[80%] z-40  bg-white shadow-xl rounded-md ">
        <div className="w-[100%] flex justify-center items-center">
          <div className="w-[60%] flex justify-center items-center mt-4">
            <form action="" className="w-[100%] space-y-5 ">
              <div className="space-x-2">
                <label htmlFor="fullname">Name </label> <br />
                <input
                  type="text"
                  name="fullname"
                  placeholder="John Doe"
                  className="bg-gray-50 px-2 py-1 w-[100%] border-gray-300 border outline-none mt-2"
                />
              </div>
              <div className="space-x-2">
                <label htmlFor="email">Email </label>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="user@gmail.com"
                  className="bg-gray-50 px-2 py-1 w-[100%] border-gray-300 border outline-none mt-2"
                />
              </div>
              <div className="space-x-2">
                <label htmlFor="job">Current Job </label>
                <br />
                <input
                  type="text"
                  name="job"
                  placeholder="DevOps Engineer"
                  className="bg-gray-50 px-2 py-1 w-[100%] border-gray-300 border outline-none mt-2"
                />
              </div>
              <div className="space-x-2">
                <label htmlFor="birthday">Date of Birth </label>
                <br />
                <input
                  type="text"
                  name="birthday"
                  placeholder="yyyy-mm-dd"
                  className="bg-gray-50 px-2 py-1 w-[100%] border-gray-300 border outline-none mt-2"
                />
              </div>
              <div className="space-x-2">
                <label htmlFor="gender">Gender </label>
                <br />
                <input
                  type="text"
                  name="fullname"
                  placeholder="Male / Female / Other"
                  className="bg-gray-50 px-2 py-1 w-[100%] border-gray-300 border outline-none mt-2"
                />
              </div>
              <div className="space-x-2">
                <label htmlFor="gender">Profile Image </label>
                <br />
                <input
                  type="file"
                  name="fullname"
                  className="bg-gray-50 px-2 py-1 w-[100%] border-gray-300 border outline-none mt-2"
                />
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={onClose}
                  className="px-3 py-2 mt-3 rounded-sm bg-neutral-800 text-white hover:bg-neutral-200 hover:text-black transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  className="px-3 py-2 mt-3 rounded-sm bg-neutral-800 text-white hover:bg-neutral-200 hover:text-black transition-all duration-300"
                  type="submit"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
