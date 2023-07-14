import Comp3 from "./Comp3";

const Comp2 = (props) => {
     const { count, users, value, handleChildData } = props; //props.count;


     const handleClick = () => {
        handleChildData(value + 5);
     }
    return (
        <div>
            <h1>Comp2</h1>
            <button onClick={handleClick}>INCREMENT PARENT VALUE</button>
            <Comp3 count={count} users={users} />
        </div>
    )
}

export default Comp2;