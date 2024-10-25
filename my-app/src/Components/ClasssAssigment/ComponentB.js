
import React from "react";
import { useContext } from "react";
import { StudentContext , MarkContext } from "../App";




const  ComponentB =() =>{

  const studentname  = useContext(StudentContext);
  const studentmark = useContext(MarkContext);
  return (
    <>
    {studentmark}, {studentname}


    </>
  )
}

export default ComponentB;