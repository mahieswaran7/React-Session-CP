import React, { Component } from "react";

class ConditionRenComp extends Component{
    constructor(props){
        super(props)

        this.state={
            isCond:true
        }
    }

    render(){

        //Use of if else
        let msg="";
       if(this.state.isCond){
      //  return <h2>Admin Login Successfully</h2>
     //  msg="admin login successfully"
       }
       else{
      // return <h2>User Login Successfully</h2>
    //  msg="user login successfully"
       }

       //2.Element as variable
   //   return <h2>{msg}</h2>

      //3.use of ternary operator

    //  return this.state.isCond ? <h2>admin login successfully</h2> :<h2>user login successfully</h2>
      
      //use of short circuit

      return this.state.isCond && <h2>Admin Login Successfully</h2>
    }
}
export default ConditionRenComp;