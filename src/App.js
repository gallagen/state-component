import React, { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Galina",
//       age: "33"
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <h3>
//           <font color="#3AC1EF"> {this.state.age} years old</font>
//         </h3>
//       </div>
//     );
//   }
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true 
    }
  }

  render() {
    let status

    if (this.state.isLoggedIn) {
      status = "You are currently logged in"
    } else {
      status = "You are currently logged out"
    }


    return (
      <div>
        <h1>{status}</h1>
      </div>
    );
  }
}

export default App;
