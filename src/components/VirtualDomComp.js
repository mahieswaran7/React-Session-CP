import React, { Component } from 'react'

export class VirtualDomComp extends Component {
   constructor(props) {
    super(props)
   
    this.state = {
         breakFast:[{id:1,name:"poha"},{id:2,name:"dosa"},{id:3,name:"idly"},{id:4,name:"poori"}]
    }
    setTimeout(()=>{
        
    })
   }
   

    render() {
        return (
            <div>
                <h2>This is Virtual Dom Component</h2>
                <ul>
                    {this.state.breakFast.map((val,index)=>{
                     //   return <li key={val.id}>{val.name}</li>
                        return <li key={index}>{val.name}</li>
                    }
                    )}
                </ul>
            </div>
        )
    }
}

export default VirtualDomComp
