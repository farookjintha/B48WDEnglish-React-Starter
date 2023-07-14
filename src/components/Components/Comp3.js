import Comp4 from "./Comp4";

const Comp3 = (props) => {
    const {count, users} = props;
    return (
        <div>
            <h1>Comp3</h1>
            <Comp4 count={count} users={users} />
        </div>
    )
}

export default Comp3;