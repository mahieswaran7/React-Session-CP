import React, { Component } from 'react'
import img9 from '../shared/images/img9.jpg'
import img10 from '../shared/images/img10.jpg'
import img11 from '../shared/images/img11.jpg'
import img4 from '../shared/images/img4.jpg'
import img5 from '../shared/images/img5.jpg'
import img6 from '../shared/images/img6.jpg'
import img7 from '../shared/images/img7.jpg'
import img8 from '../shared/images/img8.jpg'

export class MyImageComp extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h2>This is my myImages component</h2>
                <img  src={img9} alt='samosa' height="200px" width="200px"/>
                <img  src={img10} alt='samosa' height="200px" width="200px"/>
                <hr />
                <img  src={img11} alt='samosa' height="200px" width="200px"/>
                <img  src={img4} alt='samosa' height="200px" width="200px"/>
                <img  src={img5} alt='samosa' height="200px" width="200px"/>
                <img  src={img6} alt='samosa' height="200px" width="200px"/>
                <img  src={img7} alt='samosa' height="200px" width="200px"/>
                <img  src={img8} alt='samosa' height="200px" width="200px"/>
                
            </div>
        )
    }
}

export default MyImageComp
