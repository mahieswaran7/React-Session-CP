// import { Password } from '@mui/icons-material';
import { Button } from '@mui/material';
import React,{useEffect,useState} from 'react'

const UseEffectHookComp = () => {

    const [count,setCount]=useState(0);
    const[salary,setSalary]=useState(95000)
     
    // case1:when no dependency value pass:

    // useEffect(()=>{
    //     setCount(count+1)
    // })

    //case2:when we pass dependency value as blank array

    // useEffect(()=>{
    //     setCount(count+1)
    // },[])

    //case3:
    useEffect(()=>{
        setCount(salary+1000)
    },[salary])


    


    return (
        <div>
            <h2>This is UseEffect Hooks Comp</h2>
            <p >counter value is:<strong>{count}</strong></p>
            <p >counter value is:<strong>{salary}</strong></p>
            <Button onClick={()=>setSalary(salary+1000)} variant='outlined' color='success'>salary ++</Button>
            
        </div>
    )
}

export default UseEffectHookComp
