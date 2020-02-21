import React, { Component } from "react";

class Box2 extends Component {
  state = {};
  render() {
    const { values, handleC } = this.props;
    return (
      <div className="box container">
        <h1>Contact Details</h1>
        {/* <br /> */}

        <p>Email-id</p>
        <input
          type="text"
          placeholder="Enter your email id"
          onChange={handleC("email")}
          defaultValue={values.email}
        />

        <p>Github Username</p>
        <input
          type="text"
          placeholder="Enter your GitHub username"
          onChange={handleC("gitUser")}
          defaultValue={values.gitUser}
        />

        <p>CodeChef Handle</p>
        <input
          type="text"
          placeholder="Enter your Codechef handle"
          onChange={handleC("codeChef")}
          defaultValue={values.codeChef}
        />

        <br />
        <button onClick={this.props.bclick} className="myBtn">
          Back
        </button>
        <button onClick={this.props.cclick} className="myBtn">
          Continue
        </button>
      </div>
    );
  }
}

export default Box2;
