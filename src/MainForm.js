import React, { Component } from "react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";
import Box4 from "./components/Box4";

class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      gitUser: "",
      codeChef: "",
      show: 1
    };

    this.handleBack = this.handleBack.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleBack() {
    let newShow = this.state.show;
    this.setState({
      show: newShow - 1
    });
  }

  handleContinue() {
    let newShow = this.state.show;
    this.setState({
      show: newShow + 1
    });
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
    //console.log(this.state.fname);
  };

  render() {
    // destructuring of state
    const { show } = this.state;
    const { fname, lname, mobile, email, gitUser, codeChef } = this.state;
    const values = { fname, lname, mobile, email, gitUser, codeChef };
    // destructuring completed

    // Passing only 1 handler for continue
    if (show === 1)
      return (
        <Box1
          page={show}
          cclick={this.handleContinue}
          values={values}
          handleC={this.handleChange}
        />
      );
    else if (show === 2)
      return (
        // Passing 2 click handlers i.e. 1 for back and other for front
        <Box2
          page={show}
          bclick={this.handleBack}
          cclick={this.handleContinue}
          values={values}
          handleC={this.handleChange}
        />
      );
    else if (show === 3)
      return (
        // Passing 2 click handlers i.e. 1 for back and other for front
        <Box3
          page={show}
          bclick={this.handleBack}
          values={values}
          cclick={this.handleContinue}
        />
      );
    else return <Box4 page={show} values={values} Submit={this.handleSubmit} />;
  }
}

export default MainForm;
