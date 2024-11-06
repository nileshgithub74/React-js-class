import { useState } from "react";
import React from "react";
import axios from "axios";

const Activity10 = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState(""); 

  const fetchUser = () => {
    if (userId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => {
          if (res.status === 200) {
            setUsers([res.data]); 
            setMessage(""); 
          }
        })
        .catch((e) => {
          setUsers([]);
          setMessage("User not found."); 
          console.log(e);
        });
    }
  };

  return (
    <>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter user ID"
      />
      <button onClick={fetchUser}>Get user</button>
      <ul>
        {message && <li style={{ color: "red" }}>{message}</li>} 
        {users.map((user) => (
          <div key={user.id}>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>City: {user.address.city}</li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Activity10;
