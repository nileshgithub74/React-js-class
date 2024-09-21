import React  from 'react'


const style1={
    backgroundColor: "lightgreen",
}

const style2={
   color : "red",
   textAlign : "Center",
}

function InlineCss(){
    return(
        <div>
        <h1 style={style1}> class is at 3pm.</h1>
        <h2 style={style2 } >
            today is react js class
        </h2>



        </div>

    );

}

export default InlineCss;