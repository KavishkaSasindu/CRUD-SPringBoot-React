import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Create = ({ onClose, visible }) => {
  if (!visible) return null;

  const [user, setUser] = useState({
    profileId: "",
    profileName: "",
    profileEmail: "",
    job: "",
    birthyear: "",
    gender: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append(
        "user",
        new Blob([JSON.stringify(user)], { type: "application/json" })
      );
      formData.append("image", image);

      const response = await axios.post(
        "http://localhost:8080/api/v1/user/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        console.log(response.data);
        toast.success("User created successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        toast.error("User is not added");
      }

      console.log(formData);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="fixed inset-0  bg-black/20  backdrop-opacity-30 flex items-center justify-center">
      <div className=" w-[40%] h-[85%] z-40  bg-white shadow-xl rounded-md ">
        <div className="w-[100%] flex justify-center items-center">
          <div className="w-[60%] flex justify-center items-center mt-4">
            <form
              action=""
              className="w-[100%] space-y-3 "
              onSubmit={handleSubmit}
            >
              <div className="space-x-2">
                <label htmlFor="profileId">Profile-Id </label> <br />
                <input
                  type="text"
                  name="profileId"
                  placeholder="*******"
                  onChange={handleChange}
                  className="bg-gray-50 px-2 py-1 w-[100%] border-gray-300 border outline-none mt-2"
                />
              </div>
              <div className="space-x-2">
                <label htmlFor="profileName">Name </label> <br />
                <input
                  type="text"
                  name="profileName"
                  placeholder="John Doe"
                  onChange={handleChange}
                  className="bg-gray-50 px-2 py-1 w-[100%] border-gray-300 border outline-none mt-2"
                />
              </div>
              <div className="space-x-2">
                <label htmlFor="profileEmail">Email </label>
                <br />
                <input
                  type="email"
                  name="profileEmail"
                  placeholder="user@gmail.com"
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                  className="bg-gray-50 px-2 py-1 w-[100%] border-gray-300 border outline-none mt-2"
                />
              </div>
              <div className="space-x-2">
                <label htmlFor="gender">Gender </label>
                <br />
                <input
                  type="text"
                  name="gender"
                  placeholder="Male / Female / Other"
                  onChange={handleChange}
                  className="bg-gray-50 px-2 py-1 w-[100%] border-gray-300 border outline-none mt-2"
                />
              </div>
              <div className="space-x-2">
                <label htmlFor="image">Profile Image </label>
                <br />
                <input
                  type="file"
                  name="image"
                  onChange={handleImage}
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
