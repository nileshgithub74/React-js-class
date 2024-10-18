
import React ,{Component} from "react";


class FormsHandling  extends Component{
  constructor(props){
    super(props)
    this.state ={
      userName : "",
      comments : "",
    }

  }
  handleUseNameChange =(event) =>{

    this.setState({
  userName : event.target.value
    })
  }
  handleComments =(event)=>{
    this.setState({
      comments : event.target.value
    })
  }


  handleOnSubmit =(event)=>{
    
    
    // alert( `${this.state.userName }  ${this.state.comments}`);
    event.preventDefault();
    this.setState({
      submiited : 'true',
    })
   
  }
  
  render(){
    return(
      <>
      <form onSubmit={this.handleOnSubmit}>
      <label >Username : </label>
      <input type="text"  value={this.state.userName} onChange={this.handleUseNameChange} placeholder="Enter the Username "/>
      <br></br>

      <label >Comments: </label>
       <textarea name="comments"  value={this.state.comments}  onChange={this.handleComments}></textarea>
       <br />

       <button type="submit">Submit </button>



      </form>


      {this.state.submiited &&

      <>
      <h1>Input are : </h1>
      <h3>UserName : {this.state.userName}</h3>
      <h3>Comments : {this.state.comments} </h3>
    </>
      
      
      
      }



      </>
    )
  }





  
}

export default FormsHandling