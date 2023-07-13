import { Component } from "react";
import ChildComponent from "./ChildComponent";


// Class -> React Component (Stateful Component)
class ClassComponent extends Component{

    constructor(props){
        super(props);
        console.log('Constructor has been called')
        this.state = {
            count: 0
        }
        // This will be executed at first.
    }

    componentDidMount(){
        console.log('Component Did Mount has been called')
    }

    componentDidUpdate(){
        console.log('Component Did Update has been called')
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }



    //Built in react methods (from component)
   render(){
       console.log('Render has been called...')
       return (
           <div>
               <div>Hello, This is the class component</div>
               <h2>Count: {this.state.count}</h2>
                <button onClick={this.handleIncrement}>INCREMENT</button>

                {this.state.count <= 10 && <ChildComponent />}
           </div>
       )
   } 
}

export default ClassComponent;


//  1. Import Component and Extends it
// 2. Use render() to return HTML element.
// 3. Implement constructor.


