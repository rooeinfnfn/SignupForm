import React, { Component } from "react";
import firebase from "../firebase.js";
class Box4 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // here, the data will be  submitted to firebase
    console.log("Submit button clicked");
    const { values } = this.props;
    const itemsRef = firebase.database().ref("userSignUpData");

    const userSignUpData = {
      first_name: values.fname,
      last_name: values.lname,
      mobile: values.mobile,
      email: values.email,
      GitHub: values.gitUser,
      Codechef: values.codeChef
    };

    itemsRef.push(userSignUpData);
  }

  render() {
    this.handleSubmit();
    const { values } = this.props;
    return (
      <div className="box container">
        <h2>Thank You {values.fname} for Registering with Nimish</h2>
        <h4>You will recieve an email confirmation shortly</h4>
        {console.log(values)}
      </div>
    );
  }
}

export default Box4;
