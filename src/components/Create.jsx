import React, { useReducer, useRef } from "react";
import instance from "../api/Axios";
import { useNavigate } from "react-router-dom";
import { initialState, reducer } from "../reducer";
import { CREATE } from "../reducer/types";

const Create = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const firstRef = useRef();
  const lastRef = useRef();
  const ageRef = useRef();
  const jobRef = useRef();
  const navigate = useNavigate();

  const handaleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    const data = {
      firstName: firstRef.current.value,
      lastName: lastRef.current.value,
      age: ageRef.current.value,
      job: jobRef.current.value,
    };

    instance()
      .post("/users/", data)
      .then((response) => {
        dispatch({ type: CREATE, payload: response.data });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      });
  };
  return (
    <>
      <form
        onSubmit={handaleSubmit}
        className="border-1 bg-gray-500 w-[600px] rounded-md m-auto p-5 mt-[100px] text-end"
      >
        <h2 className="text-center text-[40px] text-white font-bold">
          Create new User
        </h2>
        <input
          ref={firstRef}
          className="block w-[250px] p-2 focus:w-full focus:border-emerald-500 rounded-md border-neutral-700 border-2 m-5 transparent"
          type="text"
          placeholder="firstname"
        />
        <input
          ref={lastRef}
          className="block w-[250px] p-2 focus:w-full focus:border-emerald-500 rounded-md border-neutral-700 border-2 m-5 transparent"
          type="text"
          placeholder="lastname"
        />
        <input
          ref={ageRef}
          className="block w-[250px] p-2 focus:w-full focus:border-emerald-500 rounded-md border-neutral-700 border-2 m-5 transparent"
          type="number"
          placeholder="age"
        />
        <input
          ref={jobRef}
          className="block w-[250px] p-2 focus:w-full focus:border-emerald-500 rounded-md border-neutral-700 border-2 m-5 transparent"
          type="text"
          placeholder="job"
        />
        <span className="space-x-3">
          <button className="bg-blue-400 duration-[0.3s] p-3 rounded-md hover:bg-blue-500 pointer text-white">
            Submit
          </button>
        </span>
      </form>
    </>
  );
};

export default Create;
