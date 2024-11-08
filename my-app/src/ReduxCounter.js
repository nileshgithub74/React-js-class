import React from 'react'
import { INCREMENT,DECREMENT } from './Store'

import {useSelector, useDispatch} from   'react-redux';



const ReduxCounter = () => {

  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();



  return (
   <>
   <h1>Counter :  {count}</h1>
   <button onClick={() =>dispatch({type : INCREMENT})}>INCREMENT</button>
   <button onClick={() =>dispatch({type : DECREMENT})}>DECREMENT</button>
   
   
   </>
  )
}

export default ReduxCounter