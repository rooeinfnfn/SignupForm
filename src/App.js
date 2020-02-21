import React, { Component } from "react";
import MainForm from "./MainForm";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import firebase from "./firebase";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="MainForm">
        <MainForm />
      </div>
    );
  }
}

export default App;
