const Comp4 = (props) => {
    const {count, users} = props;
    return (
        <div>
            <h1>Comp4</h1>
            {count && <h3>COUNT : {count}</h3>}
            <h2>Users List:</h2>
            {users.length && users.map((user) => (
                <h3>{user}</h3>
            ))}
        </div>
    )
}

export default Comp4;