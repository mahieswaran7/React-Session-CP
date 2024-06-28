import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductDashboardComp = () => {
    const [itemData, setItemData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:8888/products')
            .then((res) => {
                setItemData(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                // Handle error (e.g., show error message to user)
            });
    };

    const deleteProduct = (id) => {
        if (window.confirm(`Are you sure to delete record with id:${id}`)) {
            axios.delete(`http://localhost:8888/products/${id}`)
                .then(() => {
                    window.alert('Record deleted successfully');
                    // After successful deletion, fetch updated data
                    fetchData();
                })
                .catch((error) => {
                    console.error('Error deleting product:', error);
                    // Handle error (e.g., show error message to user)
                });
        }
    };

    return (
        <div>
            <h2>This is ProductDashboardComp</h2>
            <table className='table table-hover table-striped'>
                <thead>
                    <tr>
                        <th>s.no</th><th>name</th><th>price</th><th>company</th><th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {itemData.length > 0 && itemData.map((val, index) => (
                        <tr key={val.id}>
                            <td>{index + 1}</td>
                            <td>{val.pname}</td>
                            <td>{val.price}</td>
                            <td>{val.company}</td>
                            <td>
                                <button type='button' className='btn btn-outline-success btn-sm'>
                                    <EditIcon />
                                </button>
                                <button
                                    type='button'
                                    onClick={() => deleteProduct(val.id)}
                                    className='btn btn-outline-danger btn-sm'
                                >
                                    <DeleteIcon />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductDashboardComp;
