import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = null;

function getGreeting(user) {
  if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}


ReactDOM.render(<App />, document.getElementById("root"));