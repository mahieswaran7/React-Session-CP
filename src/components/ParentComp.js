import React, { Component, Fragment } from 'react'
import ChildComp from './ChildComp'


export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             empName:"Eswaran",
             empSalary:85000

        }
    }

    changeData =() =>{
        this.setState((prevState)=>({empSalary:prevState.empSalary+1000,empName:"Eswaran Arumugam"}))
    }
    
    render() {
        return (
            <Fragment>
                <h2>This is parent component</h2>
                <p>Employee Name is : <strong>{this.state.empName}</strong></p>
                <p>Employee Salary is : <strong>{this.state.empSalary}</strong></p>
                <button type='button' onClick={()=>this.changeData()}>Change State Data</button>


                <hr/>
                <ChildComp name={this.state.empName} salary={this.state.empSalary}></ChildComp>
            </Fragment>
        )
    }
}

export default ParentComp
