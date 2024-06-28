
import React, { Component } from "react";

class ClassComp extends Component{

    constructor(){
        super();
        this.state={company:"changepond",salary:85000}
    }

    render(){
       const {company,salary} =this.state;  //destructuring of state
       const {myName,post}=this.props;  //destructuring of props

        return   <div>
        <h2>This is Function Component</h2>
        {/* <p>My name is :{this.props.myName},I am :{this.props.post}</p> */}
        <p>My name is :{myName},I am :{post}</p>
        <p>Company name is:{company},My salary is:{salary}</p>
        {/* <p>Company name is:{this.state.company},My salary is:{this.state.salary}</p> */}

    </div>
    
     
    }
}
export default ClassComp;