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




// import React, { useState } from 'react'

// const FormHandle = () => {

//   const [formData, setFormData] = useState({
//     userName: '',
//     comments: '',
//   });

//   const [submitted, setSubmitted] = useState([]);

 
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData, 
//       [name]: value, 
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

   
//     setSubmitted([...submitted, formData]);

   
//     setFormData({ userName: '', comments: '' });
//   };

//   return (
//     <>
//       <h1>Form Handling</h1>

     
//       <form onSubmit={handleSubmit}>
//         <label>UserName: </label>
//         <input
//           type="text"
//           name="userName" 
//           value={formData.userName}
//           placeholder="Enter your username"
//           onChange={handleInputChange}
//         />
//         <br />

//         <label>Comments: </label>
//         <textarea
//           name="comments" 
//           value={formData.comments}
//           placeholder="Enter your comments"
//           onChange={handleInputChange}
//         />
//         <br />

//         <button type="submit">Submit</button>
//       </form>

    
//       {submitted.length > 0 && (
//         <ul>
//           {submitted.map((submission, index) => (
//             <li key={index}>
//               <strong>UserName:</strong> {submission.userName} <br />
//               <strong>Comments:</strong> {submission.comments}
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };

// export default FormHandle;



// import React, { useState } from 'react';

// const FormHandle = () => {
  
//   const [formData, setFormData] = useState({
//     userName: '',
//   });

//   const [submitted, setSubmitted] = useState([]); 
 
//   const handleInputChange = (e) => {
//     const { name, value } = e.target; 

//     setFormData({
//       ...formData,
//       [name]: value, 
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Add new submission to the array
//     setSubmitted([...submitted, formData]);

//     // Clear form fields
//     setFormData({ userName: '' });
//   };

//   // CSS styles stored in variables
//   const headingStyle = {
//     color: 'blue',
//     fontSize: '24px',
//     textAlign: 'center',
//   };

//   const formStyle = {
//     margin: '20px',
//     padding: '10px',
//     border: '1px solid #ccc',
//   };

//   const labelStyle = {
//     fontWeight: 'bold',
//   };

//   const inputStyle = {
//     padding: '5px',
//     margin: '10px 0',
//     border: '1px solid #000',
//     width: '100%',
//   };

//   const buttonStyle = {
//     padding: '10px 20px',
//     backgroundColor: 'green',
//     color: 'white',
//     border: 'none',
//     cursor: 'pointer',
//   };

//   const listStyle = {
//     listStyleType: 'none',
//     paddingLeft: 0,
//   };

//   const itemStyle = {
//     backgroundColor: '#f0f0f0',
//     padding: '10px',
//     margin: '5px 0',
//     border: '1px solid #ddd',
//   };

//   return (
//     <>
//       <h1 style={headingStyle}>Form Handling</h1>

//       {/* Form with input for userName */}
//       <form onSubmit={handleSubmit} style={formStyle}>
//         <label style={labelStyle}>UserName: </label>
//         <input
//           type="text"
//           name="userName" // Match with formData key
//           value={formData.userName}
//           placeholder="Enter your username"
//           onChange={handleInputChange}
//           style={inputStyle}
//         />
//         <br />

//         <button type="submit" style={buttonStyle}>
//           Submit
//         </button>
//       </form>

//       {/* Display submitted data */}
//       {submitted.length > 0 && (
//         <ul style={listStyle}>
//           {submitted.map((submission, index) => (
//             <li key={index} style={itemStyle}>
//               <strong>UserName:</strong> {submission.userName}
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };

// export default FormHandle;
