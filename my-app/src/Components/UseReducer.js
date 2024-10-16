// import { useReducer } from "react";

// const initialState = 0;

// const reducer = (state, action) => {
//   switch (action) {  
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     case 'reset':
//       return initialState;
//     default:
//       return state;
//   }
// };

// const UseReducer = () => {


//   const [count, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={() => dispatch( 'increment' )}>Increment</button>
//       <button onClick={() => dispatch( 'decrement'  )}>Decrement</button>
//       <button onClick={() => dispatch('reset'  )}>Reset</button>
//     </>
//   );
// };

// export default UseReducer;






import { useReducer } from "react";
const initialState =  {
  count : 0,
}

const reducer = (state, action) => {
  switch (action.type) {  
    case 'increment':
      return {count :  state.count + 1};
    case 'decrement':
      return {count : state.count - 1};
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const UseReducer = () => {


  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({type:  'increment' })}>Increment</button>
      <button onClick={() => dispatch( {type:  'decrement' } )}>Decrement</button>
      <button onClick={() => dispatch({type:  'reset' } )}>Reset</button>
    </>
  );
};

export default UseReducer;
