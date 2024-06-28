import React ,{Component}from 'react'
import ClickCountComp from './ClickCountComp'

const HocComp = (wrapperComp) => {

    class Hoc extends Component{
        constructor(props){
            super(props)
            
            this.state={
                count:0
            }
            
        }
    
    counterIncrement =() =>{
        this.setState((prevState)=>({count:prevState.count+1}))
    }

    render() {

        return <wrapperComp count ={this.state.count} counterIncrement={()=>this.counterIncrement()}></wrapperComp>
    }

    
} 

}

export default HocComp
