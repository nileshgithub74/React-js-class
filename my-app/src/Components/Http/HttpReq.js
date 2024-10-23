import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const HttpReq = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <ul>
        {users.map((user, id) => (
          <li key={id}>{user.name} </li>
        ))}
      </ul>
    </>
  );
};

export default HttpReq;



