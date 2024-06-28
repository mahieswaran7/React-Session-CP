import React from 'react'
import staticData from '../shared/constant/ConstantData'
import './External.css'
import myModule from './myModule.module.css'

const CssComp = () => {
      const txtObj={
        color: !true?"green":"red",
        fontSize: !false?"30px":"20px",
        backgroundColor:!true?"pink":"dodgerblue"
      }

    return (
        <>
            <h2 style={{color:"blue",backgroundColor:"aqua"}}>This mis my css component</h2>
            <p style={txtObj}>Hello are How are you, i hope you are doing well</p>
            <img className='imgProp' src={staticData.img10} alt='IMG10'/> <br />
            <img className={myModule.box} src={staticData.img11} alt='IMG11' />
        </>
    )
}

export default CssComp
