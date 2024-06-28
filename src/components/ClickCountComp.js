import { Button } from '@mui/material'
import React, { Component } from 'react'

export class ClickCountComp extends Component {
   constructor(props) {
    super(props)
   
    this.state = {
         count:0
    }
   }
   counterIncrement =() =>{
    this.setState({count:this.state.count+1})
   }
   

    render() {
        return (
            <div>
                <h2>This is counter click event</h2>
                <p className='text-primary'>Counter value is :<strong>{this.state.count}</strong></p>
                {/* <p>Counter value is :<strong>{this.props.count}</strong></p> */}
                 <button onClick={()=>this.counterIncrement()} className='btn btn-primary'>Click increment button</button>
                 {/* <button type='button' onClick={()=>this.props.counterIncrement()}>Click increment button</button> */}
                 <Button variant='contained'onClick={()=>this.props.counterIncrement()}>Count++</Button>
                
            </div>
        )
    }
}

export default ClickCountComp
