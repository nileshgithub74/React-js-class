// import React, { useState } from "react";

// const FormHandle = () => {
//   const [userName, setUserName] = useState("");
//   const [comment, setComment] = useState("");
//   const [submitted, setSubmitted] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newSubmission = { userName, comment };
//     setSubmitted([...submitted, newSubmission]);

//     setUserName("");

//     setComment("");
//   };

//   const HandleUserNameChange = (e) => {
//     setUserName(e.target.value);
//   };

//   const HandleChangeComments = (e) => {
//     setComment(e.target.value);
//   };

//   return (
//     <>
//       <h1>Forms handling </h1>

//       <form onSubmit={handleSubmit}>
//         <label>UserName : </label>
//         <input
//           type="text"
//           value={userName}
//           placeholder="Enter the username"
//           onChange={HandleUserNameChange}
//         />
//         <br />

//         <label>Comments : </label>
//         <textarea value={comment} onChange={HandleChangeComments}></textarea>

//         <button type="submit">Submit</button>
//       </form>

//       {submitted.length > 0 && (
//         <ul>
//           {submitted.map((submission, index) => (
//             <li key={index}>
//               <strong>UserName:</strong> {submission.userName} <br />
//               <strong>Comments:</strong> {submission.comment}
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };

// export default FormHandle;

// import React, { useState } from 'react'

// const FormHandle = () => {
//   const [userName, setUserName] = useState('');
//   const [comment, setComment] = useState('');
//   const [submittedData, setSubmittedData] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedData({ userName, comment });
//   }

//   const HandleUserNameChange = (e) => {
//     setUserName(e.target.value);
//   }

//   const HandleChangeComments = (e) => {
//     setComment(e.target.value);
//   }

//   return (
//     <>
//       <h1>Forms Handling</h1>
//       <form onSubmit={handleSubmit}>
//         <label>UserName: </label>
//         <input
//           type="text"
//           value={userName}
//           placeholder='Enter the username'
//           onChange={HandleUserNameChange}
//         />
//         <br />
//         <label>Comments: </label>
//         <textarea value={comment} onChange={HandleChangeComments}></textarea>
//         <br />
//         <button type="submit">Submit</button>
//       </form>

//       {submittedData && (
//         <div>
//           <h2>Submitted Data</h2>
//           <p><strong>Username:</strong> {submittedData.userName}</p>
//           <p><strong>Comment:</strong> {submittedData.comment}</p>
//         </div>
//       )}
//     </>
//   )
// }

// export default FormHandle;




import React, { useState } from 'react'

const FormHandle = () => {

  const [formData, setFormData] = useState({
    userName: '',
    comments: '',
  });

  const [submitted, setSubmitted] = useState([]);

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, 
      [name]: value, 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    setSubmitted([...submitted, formData]);

   
    setFormData({ userName: '', comments: '' });
  };

  return (
    <>
      <h1>Form Handling</h1>

     
      <form onSubmit={handleSubmit}>
        <label>UserName: </label>
        <input
          type="text"
          name="userName" 
          value={formData.userName}
          placeholder="Enter your username"
          onChange={handleInputChange}
        />
        <br />

        <label>Comments: </label>
        <textarea
          name="comments" 
          value={formData.comments}
          placeholder="Enter your comments"
          onChange={handleInputChange}
        />
        <br />

        <button type="submit">Submit</button>
      </form>

    
      {submitted.length > 0 && (
        <ul>
          {submitted.map((submission, index) => (
            <li key={index}>
              <strong>UserName:</strong> {submission.userName} <br />
              <strong>Comments:</strong> {submission.comments}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FormHandle;
