 import React, {Component} from "react";

 class MethodEventComp extends  Component{
    greeting =() =>{
        window.alert("Good afternoon All")
    }

    welcome = (...std)=>{
        window.alert(`Welcome you ${std}`)
    }
    render(){
        return <div>
          <h2>This is Event Component Method</h2>
          <button type="button" onClick={this.greeting}>Greeting</button>
          <button type="button" onClick={this.welcome ("Eswaran")}>Welcome</button>
          <h2 onMouseOver={()=>this.greeting()}>Hover on me call greeting Method</h2>

        </div>
    }
 }
 export default MethodEventComp;