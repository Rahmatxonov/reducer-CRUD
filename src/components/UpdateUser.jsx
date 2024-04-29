import React, { useState, useEffect } from "react";
import instance from "../api/Axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    instance()
      .get(`/users/${id}`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !userData.firstName ||
      !userData.lastName ||
      !userData.age ||
      !userData.job
    ) {
      return;
    }

    try {
      await instance().put(`/users/${id}`, userData);
      setTimeout(() => navigate("/"), 300);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-1 bg-gray-500 w-[600px] rounded-md m-auto p-5 mt-[100px] text-end"
    >
      <h2 className="text-center text-[40px] text-white font-bold">
        Update user info
      </h2>
      <input
        className="block w-[250px] p-2 focus:w-full focus:border-emerald-500 rounded-md border-neutral-700 border-2 m-5 transparent"
        type="text"
        name="firstName"
        value={userData.firstName || ""}
        onChange={handleChange}
        placeholder="firstname"
      />
      <input
        className="block w-[250px] p-2 focus:w-full focus:border-emerald-500 rounded-md border-neutral-700 border-2 m-5 transparent"
        type="text"
        name="lastName"
        value={userData.lastName || ""}
        onChange={handleChange}
        placeholder="lastname"
      />
      <input
        className="block w-[250px] p-2 focus:w-full focus:border-emerald-500 rounded-md border-neutral-700 border-2 m-5 transparent"
        type="number"
        name="age"
        value={userData.age || ""}
        onChange={handleChange}
        placeholder="age"
      />
      <input
        className="block w-[250px] p-2 focus:w-full focus:border-emerald-500 rounded-md border-neutral-700 border-2 m-5 transparent"
        type="text"
        name="job"
        value={userData.job || ""}
        onChange={handleChange}
        placeholder="job"
      />
      <span className="space-x-3">
        <button
          type="submit"
          className="bg-green-400 duration-[0.3s] p-3 rounded-md hover:bg-green-500 pointer text-white"
        >
          Change
        </button>
      </span>
    </form>
  );
};

export default UpdateUser;
