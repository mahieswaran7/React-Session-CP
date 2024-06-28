import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const NavComp = () => {
const nav=useNavigate();
    const backTo=()=>{
        window.confirm("Are You sure to Logout!!");
       nav('/')
    }
    return (
        <div>
           <Link to="mySlider" className='btn btn-primary btn-sm'> Myslider</Link> &nbsp;
           <Link to="myimages" className='btn btn-primary btn-sm'> MyImages</Link>  &nbsp;
           <Link to="parent" className='btn btn-primary btn-sm'> Myparent</Link>   &nbsp;
           <Link to="Hooks" className='btn btn-primary btn-sm'> Hooks</Link>  &nbsp;
           <Link to="virtualdom" className='btn btn-danger btn-sm'> Virtual Dom</Link>  &nbsp;
           <Link to="formval" className='btn btn-success btn-sm'> Form</Link> &nbsp;
           <Link to="productdash" className='btn btn-warning btn-sm'> Product</Link> &nbsp;
           <Link to="" className='btn btn-warning btn-sm' onClick={()=>backTo()}> Logout</Link>
        </div>

    )
}

export default NavComp
