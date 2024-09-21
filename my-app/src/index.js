import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// const myelement = <h1 style={{color:"red"}}>Welcome</h1>
// root.render(myelement);



// function displayDate(){
//   const element = (

//     <div>
//     <h1> Time :  </h1>

//     <h2>{new Date().toLocaleTimeString()}</h2>
//     </div>
//   )
//   root.render(element);

// }
// setInterval(displayDate,1000);



// const element = React.createElement("div", { 
//   style:{ 
//     backgroundColor: "yellow", height: "150px", width: "300px", justifyContent: "center", margin: "0 auto",textAlign: "center",} 
// }, React.createElement("h1", { style: { color: "red" } }, "Lpu"),React.createElement("h4", { style: { color: "red" } }, "Transforming Education Transforming")
// );

// root.render(element);




// const ingredients = [
//   ' lb Salmon',
//   '1 cup Pine Nuts',
//   '2 cups Butter Lettuce',
//   '1 Yellow Squash',
//   '1/2 cup Olive Oil',
//   '3 cloves of Garlic'
// ];

// const element = React.createElement('div',{},React.createElement('h1', {},''),
//   React.createElement(
//     'ul', null, ingredients.map((ingredient, index) =>React.createElement('li', { key: index }, ingredient)
//     )
//   )
// );


// root.render(element);
