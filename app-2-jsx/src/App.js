import React, { Component } from "react";
import "./App.css";
class App extends Component {
  render() {
    var users = [
      {
        id: 1,
        name: "Nguyen Van B",
        age: 10
      },
      {
        id: 2,
        name: "Nguyen Van B",
        age: 10
      }
    ];

    var elements = users.map((user, map) => {
      return (
        <div key={user.id}>
          <h5>ID: {user.id}</h5>
          <h4>NAME: {user.name}</h4>
          <h5>AGE: {user.age}</h5>
          <br />
        </div>
      );
    });
    return (
      <div style={{ padding: "25px" }}>
        <div>{elements}</div>
        <h1>End!!!</h1>
      </div>
    );
  }
}
export default App;
