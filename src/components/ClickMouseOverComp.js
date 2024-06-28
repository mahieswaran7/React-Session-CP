import React, { Component } from 'react'

export class ClickMouseOverComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0

        }
    }
    Hoverme(){
        this.setState({count:this.state.count+1});
    }
    
    render() {
        return (
            <div>
                <h2>Count :{()=>this.Hoverme()} <strong>{this.state.count}</strong></h2>
                <h2 onMouseOver={()=>this.Hoverme()}>Hover me</h2>
                
            </div>
        )
    }
}

export default ClickMouseOverComp
