import { Button } from '@mui/material';
import React ,{ useState} from 'react'

const UseStateHookComp = () => {

    const[count,setCount]=useState(0);
    const[name,setName]=useState("Eswaran");

    const counterInc =()=>{
        setCount(count+1);
    }

    return (
        <div>
            <h2>This is use state Component</h2>
            <p>Counter value is :{count}</p>
           <Button variant='contained' onClick={()=> counterInc()}>Counter ++</Button> {" "}
           <Button variant='contained' onClick={()=> setCount(count+1)}>Counter ++</Button> 

           <hr/>

           <p>My name is :{name}</p>
           <Button variant='contained' onClick={()=>setName("Eswaran Arumugam")}>Change Name</Button>


        </div>
    )
}

export default UseStateHookComp
