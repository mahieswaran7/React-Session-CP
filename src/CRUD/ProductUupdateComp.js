import React,{useEffect, useState} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';

const ProductUpdateComp = () => {
    const {id} = useParams();
    const nav = useNavigate()
    const [itemData,setItemData] = useState({
        id:"",
        pname:"",
        price:"",
        company:""
    });

    const inputChangeHandler = (events)=>{
            const {type,name,value} = events.target;
            setItemData({...itemData,[name]:value});
    }
    const addRecord = (event)=>{
        event.preventDefault();
        axios.put(`http://localhost:8888/products/${id}`,itemData).then(()=>{
            window.alert("Record Updated Successsfully");
            nav('/maindashboard/productdash');
        }).catch((error)=>{})
    }

    useEffect(()=>{
        axios.get(`http://localhost:8888/products/${id}`).then((res)=>{
            // console.log(res.data);
            setItemData(res.data);
        }).catch((error)=>{})
    },[])
    return (
        <div>
            <h2>This is Product Update Component</h2>
            <div className='row'>
             <div className='col-sm-3'></div>
             <div className='col-sm-6'>
            
             <form onSubmit={addRecord}>
                <label className='form-label'>Enter Product Name</label>
                <input type='text' name="pname" onChange={inputChangeHandler} value={itemData.pname} className='form-control' />
                
                <label className='form-label'>Enter Product Price</label>
                <input type='text' name="price" onChange={inputChangeHandler} value={itemData.price} className='form-control' />
                
                <label className='form-label'>Enter Product Name</label>
                <input type='text' name="company" onChange={inputChangeHandler} value={itemData.company} className='form-control' />
                
                <button type='submit' className='btn btn-primary mt-2'>Submit</button>
             </form>

             </div>
             <div className='col-sm-3'></div>
            </div>
        </div>
    )
}

export default ProductUpdateComp