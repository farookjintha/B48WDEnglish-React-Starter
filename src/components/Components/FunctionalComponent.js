//Hooks has to be imported from react
import { useEffect, useState } from "react";
import ChildFC from "./ChildFunctionalComponent";
import Comp1 from "./Comp1";

//Functiona Component -> Stateless Component
const FunctionalComponent = (props) => {
    const [value, setValue] = useState(0);
    const [name, setName] = useState('');
    const [users, setUsers] = useState([]);
    const [xyz, setXYZ] = useState(0);

    const handleIncrement = () => {
        setValue(value + 1);
    };

    // This will be executed on every changes ie. on mounting as well as on updating as well on unmounting of child
    useEffect(() => {
        console.log('useEffect 1 is called...')
    }); //No Dependency Array

    //This will be executed only on mounting phase
    useEffect(() => {
        console.log('useEffect 2 is called...')
    }, []); //Empty Dependency Array

    // This will be executed on mounting, as well as, the updating phase when the varaible inside the dep arr changes
    useEffect(() => {
        console.log('useEffect 3 is called...')
    }, [name]); //Dependency Array with a State varaible

    return (
        <div>
            Hello, This is Functional Component!
            {/* <h2>COUNT: {value}</h2>
            <button onClick={handleIncrement}>INCREMENT</button>
            <h2>NAME: {name}</h2>
            <input placeholder="Enter a name" onChange={(e) => setName(e.target.value)} />
            <h2>XYZ: {xyz}</h2>
            <button onClick={() => setXYZ(xyz + 1)}>INCREMENT XYZ</button>

            {value > 5 && value <= 10 && <ChildFC />} */}
            <Comp1 />
        </div>
    )
}

export default FunctionalComponent;



// Hooks - These are builtin functions  in React for certain purpose.


// useState -> create and manage state varaibles in component
// const [variable, functionThatUpdatesTheVariable] = useState(initialValue); 

// useEffect -> work with lifecycle phases, i.e., mounting, updating and unmounting


// Type 1
// useEffect(() => {

// });

// Type 2
// useEffect(() => {

// }, EmptyDependencyArray);

// Type 3
// useEffect(() => {

// }, ValueInDependencyArray);

// Type 4
// useEffect(() => {
//     return ()
// }, [])