import React, { useEffect, useState } from "react";
import instance from "../api/Axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    instance()
      .get("/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [deleted]);

  const deleteItem = (userId) => {
    instance()
      .delete(`/users/${userId}`)
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        setDeleted(!deleted);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <ul className="userlist relative flex flex-wrap ms-[80px]">
        {users.length > 0 &&
          users.map((item) => {
            const { id, firstName, lastName, age, job } = item;
            return (
              <li
                key={id}
                className="text-[20px] m-5  flex flex-col bg-[orange] rounded-md w-[400px] text-white p-5"
              >
                <span>Ism: {firstName}</span>
                <span> Familiya: {lastName}</span>
                <span>Yosh: {age}</span>
                <span>ISh: {job}</span>
                <span className="space-x-3">
                  <Link to={`/update/${id}`}>
                    <button className="bg-green-500 duration-[0.3s] p-2 rounded-md hover:bg-green-600 pointer ">
                      Update
                    </button>
                  </Link>
                  <button
                    id={id}
                    onClick={() => deleteItem(id)}
                    className="bg-red-500 p-2 mt-3 text-white rounded-md hover:bg-red-600 pointer"
                  >
                    delete
                  </button>
                </span>
              </li>
            );
          })}
      </ul>
      <Link
        to={"/create"}
        className="create bg-blue-500 p-3 absolute rounded-md uppercase rotate-[-90deg] m-[-20px] text-white"
      >
        create
      </Link>
    </>
  );
};

export default UserList;
