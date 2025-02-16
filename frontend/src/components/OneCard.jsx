import axios from "axios";
import React, { useEffect, useState } from "react";

const OneCard = ({ visible, onClose, id }) => {
  if (!visible) return null;

  console.log(id);

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

      console.log(userData);

      setUser(userData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="fixed inset-0  bg-black/20  backdrop-opacity-30 flex items-center justify-center">
        <div className="bg-white p-5 rounded-md shadow-md flex justify-center items-center w-[350px] h-auto">
          <div className="w-full h-full flex justify-center items-center ">
            <div className=" flex flex-col justify-center items-center space-y-3">
              <img
                src={image}
                alt="profile image"
                className="w-[200px] h-[200px] object-cover  rounded-full shadow-lg flex justify-center items-center"
              />
              <div>
                <div className="w-[200px] h-auto space-y-5 flex flex-col justify-center items-start ">
                  <h1>
                    <span className="font-medium">ID</span> : {user.profileId}
                  </h1>
                  <h1>
                    <span className="font-medium">Name</span> :{" "}
                    {user.profileName}
                  </h1>
                  <h1>
                    <span className="font-medium">Email</span> :{" "}
                    {user.profileEmail}
                  </h1>
                  <h1>
                    <span className="font-medium">Job</span> : {user.job}
                  </h1>
                  <h1>
                    <span className="font-medium">Date of Birth</span> :
                    {user.birthday}
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
