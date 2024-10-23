import React, { useState } from "react";
import axios from "axios";

const PostReq = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      name: name,
      age: age,
    };

    axios
      .post("https://api.example.com/submit", postData)
      .then((res) => {
        console.log("Response:", res.data);
        setResponse(res.data); 
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  return (
    <>
      <h2>Submit Your Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {response && (
        <div>
          <h3>Response from API:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default PostReq;
