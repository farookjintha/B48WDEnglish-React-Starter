import { Component } from "react";

class ChildComponent extends Component{
    constructor(props){
        super(props);
    }

    componentWillUnmount(){
        console.log('Component Will Unmout has been called in Child Compenent')
    }



    render(){
        console.log('Child Render has been called');
        return (
            <div>
                <h2>HELLO</h2>
            </div>
        )
    }
}

export default ChildComponent;