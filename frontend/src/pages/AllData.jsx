import React, { use, useEffect, useState } from "react";
import Create from "../components/Create";
import Card from "../components/Card";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Update from "../components/Update";
import { motion } from "motion/react";

const AllData = () => {
  const [showModel, setShowModel] = useState(false);
  const [showUpdateModel, setShowUpdateModel] = useState(false);
  const [user, setUser] = useState([]);
  const showComponent = () => {
    setShowModel(true);
  };

  const showUpdate = () => {
    setShowUpdateModel(true);
  };

  const handleOnClose = () => {
    setShowModel(false);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/user/getAll"
      );

      if (response.status === 200) {
        const userList = await response.data;
        console.log(userList);

        const userWithImage = await Promise.all(
          userList.map(async (user) => {
            const imageResponse = await axios.get(
              `http://localhost:8080/api/v1/user/image/${user.id}`,
              { responseType: "blob" }
            );

            let imageData = null;

            if (imageResponse.status === 200) {
              imageData = URL.createObjectURL(imageResponse.data);
              console.log(imageData);
            }

            return {
              ...user,
              imageData: imageData,
            };
          })
        );
        setUser(userWithImage);
        toast.success("Data fetched successfully");
        console.log(user);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
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

  return (
    <div>
      <div className="fixed  w-[100%] h-[8%] bg-neutral-900">
        <div className="flex justify-between">
          <h1 className="text-white mt-3 ml-3 text-xl">Dashboard</h1>
        </div>
      </div>
      <div className="w-[100%] h-screen flex  items-center ">
        <div className="w-[15%]  h-full bg-gray-300/15 shadow-md shadow-neutral-300">
          <div className=" w-full  mt-[80px] flex items-center justify-center">
            <div className="w-full h-full ml-5 space-y-3">
              <button
                onClick={showComponent}
                className="px-3 py-2 mt-3 rounded-sm bg-neutral-800 text-white hover:bg-neutral-200 hover:text-black transition-all duration-300"
              >
                Add User
              </button>
            </div>
          </div>
        </div>
        <div className="w-[80%] h-full">
          <div className="w-[100%]  h-[630px] mt-[80px] ml-10 overflow-y-scroll no-scrollbar scroll-smooth">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className="border-b bg-gray-300 font-normal  text-black ">
                        <tr>
                          <th scope="col" className="px-6 py-4">
                            ID
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Name
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Email
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Job
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Date of Birth
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Gender
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Profile Image
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <motion.tbody>
                        {user.map((user) => (
                          <motion.tr
                            key={user.profileId}
                            className="border-b transition duration-300 ease-in-out hover:bg-gray-200"
                          >
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {user.profileId}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.profileName}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.profileEmail}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.job}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.birthday}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.gender}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <img
                                src={user.imageData}
                                alt="profile-image"
                                className="w-[80px] h-[80px] object-cover rounded-full"
                              />
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <td className="flex space-x-2">
                                <button>
                                  <Card id={user.id} />
                                </button>
                                <button>
                                  <Update id={user.id} />
                                </button>
                                <button
                                  className="px-3 py-2 mt-3 rounded-sm bg-neutral-800 text-white hover:bg-neutral-200 hover:text-black transition-all duration-300"
                                  onClick={() => {
                                    confirm(
                                      "Are you sure you want to delete this user?"
                                    ) && deleteUser(user.id);
                                  }}
                                >
                                  Delete
                                </button>
                              </td>
                            </td>
                          </motion.tr>
                        ))}
                      </motion.tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Create onClose={handleOnClose} visible={showModel} />
    </div>
  );
};

export default AllData;
