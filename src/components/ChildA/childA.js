import { useState } from 'react'; //Only in FC

const ChildA = (props) => {

    const [count, setCount]= useState(0);
    // const [name, setName]= useState('');
    // const [users, setUsers] = useState([]);

    const incrementCount = () => {
        setCount(count + 5);
    }


    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={incrementCount}>Increment</button>
        </div>
    )
}

export default ChildA;


// Props Drilling
// CompA -> data
// CompB - props.data
// CompC - props.data
// CompD - props.data
// CompE -> props.data

// Hooks -> pre-built functions for certain purpose