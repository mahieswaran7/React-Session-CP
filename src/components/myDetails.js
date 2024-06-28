import React, { Component } from "react";

class myDetails extends Component{

    constructor(){
        super();
         this.state={
         gender:"Male",
         marital:"single",
         address:"chennai"
    }
}
    render(){
        const{gender,marital,address}=this.state
        const {fname,lname,email,contact}=this.props
        return <div>
        <h2>This is a task component</h2>
        <p>My name is:{fname},and I'm  a :{lname},my email is:{email},my address is:{address}</p>
        <p>My gender is:{gender},my address is:{address},marital status is :{marital}</p>
    </div>
    }
   

    }

export default myDetails;