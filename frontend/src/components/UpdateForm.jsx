import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UpdateForm = ({ visible, id, onClose }) => {
  if (!visible) return null;

  const [user, setUser] = useState({
    profileId: "",
    profileName: "",
    profileEmail: "",
    job: "",
    birthday: "",
    gender: "",
  });

  const [image, setImage] = useState(null);

  const fetchData = async () => {
    try {
      const userResponse = await axios.get(
        `http://localhost:8080/api/v1/user/${id}`,
        { responseType: "json" }
      );

      const userData = await userResponse.data;

      if (userResponse.status === 200) {
        const imageResponse = await axios.get(
          `http://localhost:8080/api/v1/user/image/${id}`,
          { responseType: "blob" }
        );

        const imageData = URL.createObjectURL(imageResponse.data);

        setImage(imageData);
      }

      setUser(userData);
      console.log(userData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const updateData = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append(
        "user",
        new Blob([JSON.stringify(user)], { type: "application/json" })
      );
      formData.append("image", image);

      const updateResponse = await axios.put(
        `http://localhost:8080/api/v1/user/update/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (updateResponse.status === 200) {
        toast.success("Data updated successfully");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
      const updateData = await updateResponse.data;
      console.log(updateData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/user/delete/${id}`
      );
      if (response.status === 200) {
        toast.success("Data deleted successfully");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast.error("Data not deleted");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(id);
  return (
    <div className="fixed inset-0  bg-black/20  backdrop-opacity-30 flex items-center justify-center">
      <div className=" w-[40%] h-[85%] z-40  bg-white shadow-xl rounded-md ">
        <div className="w-[100%] flex justify-center items-center">
          <div className="w-[60%] flex justify-center items-center mt-4">
            <form
              action=""
              className="w-[100%] space-y-4 font-normal"
              onSubmit={updateData}
            >
              <div>
                <label htmlFor="profileId" className="flex items-start">
                  Profile-Id{" "}
                </label>{" "}
                <input
                  type="text"
                  name="profileId"
                  value={user.profileId}
                  onChange={handleChange}
                  className="bg-gray-50 px-2 py-1 w-[100%] border-gray-300 border outline-none mt-2"
                />
              </div>
              <div className="space-x-2">
                <label htmlFor="profileName" className="flex items-start">
                  Name{" "}
                </label>{" "}
                <input
                  type="text"
                  name="profileName"
                  value={user.profileName}
                  onChange={handleChange}
                  className="bg-gray-50 px-2 py-1 w-[100%] border-gray-300 border outline-none mt-2"
                />
              </div>
              <div className="space-x-2">
                <label htmlFor="profileEmail" className="flex items-start">
                  Email{" "}
                </label>

                <input
                  type="email"
                  name="profileEmail"
                  value={user.profileEmail}
                  onChange={handleChange}
                  className="bg-gray-50 px-2 py-1 w-[100%] border-gray-300 border outline-none mt-2"
                />
              </div>
              <div className="space-x-2">
                <label htmlFor="job" className="flex items-start">
                  Current Job{" "}
                </label>

                <input
                  type="text"
                  name="job"
                  value={user.job}
                  onChange={handleChange}
                  className="bg-gray-50 px-2 py-1 w-[100%] border-gray-300 border outline-none mt-2"
                />
              </div>
              <div className="space-x-2">
                <label htmlFor="birthday" className="flex items-start">
                  Date of Birth{" "}
                </label>

                <input
                  type="text"
                  name="birthday"
                  value={user.birthday}
                  onChange={handleChange}
                  className="bg-gray-50 px-2 py-1 w-[100%] border-gray-300 border outline-none mt-2"
                />
              </div>
              <div className="space-x-2">
                <label htmlFor="gender" className="flex items-start">
                  Gender{" "}
                </label>

                <input
                  type="text"
                  name="gender"
                  value={user.gender}
                  onChange={handleChange}
                  className="bg-gray-50 px-2 py-1 w-[100%] border-gray-300 border outline-none mt-2"
                />
              </div>
              <div className="space-x-2">
                <label htmlFor="image" className="flex items-start">
                  Profile Image{" "}
                </label>

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
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
