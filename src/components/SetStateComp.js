import React, { Component } from "react";


class SetStateComp extends Component{

    constructor(props){
        super(props)

        this.state={
            count:0,
            name:"Eswaran "
        }
    }
    counterInc = ()=>{
        this.setState((prevState) =>({count:prevState.count+1,name:" Eswaran Arumugam"}))
     }


     counterDec = ()=>{
        this.setState((prevState) =>({count:prevState.count-1}))
     }
     

    render(){
        return ( <div>
        <h2>This is SetStateComponent Method</h2>
         <p>Count value is :<strong>{this.state.count}</strong></p>
         <p>Name :<strong>{this.state.name}</strong></p>
         <button onClick={this.counterInc}>click +</button>
         <button onClick={this.counterDec}>click -</button>
         {/* <button onClick={this.counterInc}></button> */}

        </div>)
    }

    
}
export default SetStateComp;