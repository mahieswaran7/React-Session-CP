import React from 'react'

const ChildComp = (props) => {
    return (
        <div>
            <h2>This is  Child Component</h2>
            <p>Employee name is :{props.empName}</p>
            <p>Employee name is :{props.empSalary}</p>
            <button type='button' onClick={()=>props.changeData()}>Change</button>
        </div>
    )
}

export default ChildComp
