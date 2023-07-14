import { useEffect, useState } from "react";
import Comp2 from "./Comp2";

const Comp1 = () => {
    const count = 10;
    const [users, setUsers] = useState(['vijay', 'arvind', 'priya', 'preethi']);


    //STATE
    const [value, setValue] = useState(0);


    //CALLED WHEN VALUE CHANGES
    useEffect(() =>{
        console.log('Updated Value: ', value);
    }, [value])

    const handleChildData = (data) => {
        setValue(data);
    }

    return (
       <div>
            <h1>Comp1</h1>
            <h3>VALUE: {value}</h3>
            <Comp2 count={count} users={users} value={value} handleChildData={handleChildData} />
       </div>
    )
}

export default Comp1;


// TO SEND DATA FROM PARENT TO CHILD -> USE DATA AS PROPS
// TO SEND DATA FROM CHILD TO PARENT -> USE FUNCTION AS PROPS