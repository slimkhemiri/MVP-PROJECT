import React, { Component } from "react";
import Login from "./login-signup/login.jsx";
import Signup from "./login-signup/signup.jsx";
import Home from "./home/home.jsx";
import Clickin from "./login-signup/clickin.jsx";
import Verify from "./login-signup/verify.jsx";
import axios from "axios";
import "../css/style.css";
////////////////////////////////////////////////////////////////////

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      clickin: false,
      login: false,
      signup: false,
      home: false,
      verify: true,
    };

    ///////////////////////bind the functions///////////////////////

    this.handleSaveName = this.handleSaveName.bind(this);
    this.handleSaveEmail = this.handleSaveEmail.bind(this);
    this.handleSavePass = this.handleSavePass.bind(this);
    this.handleClickLogin = this.handleClickLogin.bind(this);
    this.handleClickRegister = this.handleClickRegister.bind(this);
    this.handleClickHome = this.handleClickHome.bind(this);
    this.handleClickVerify = this.handleClickVerify.bind(this);
    this.sendData = this.sendData.bind(this);
    this.checkData = this.checkData.bind(this);
  }

  /////////////////////save changes in the inputs///////////////////
  handleSaveName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleSaveEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleSavePass(e) {
    this.setState({
      password: e.target.value,
    });
  }

  ////////////////check user and password when login////////////////

  checkData() {
    axios
      .post("http://localhost:1337/login", {
        name: this.state.name,
        password: this.state.password,
      })
      .then((res) => console.log(res));
    this.handleClickHome();
  }

  ///////////////////send data to DataBase when signup//////////////
  sendData() {
    axios.post("http://localhost:1337/signup", {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
    this.handleClickLogin();
  }

  //////////////////////Rendering components when click/////////////
  handleClickLogin() {
    this.setState({
      clickin: false,
      signup: false,
      login: true,
    });
  }

  handleClickRegister() {
    this.setState({
      clickin: false,
      signup: true,
    });
  }

  handleClickHome() {
    this.setState({
      login: false,
      home: true,
    });
  }
  handleClickVerify() {
    this.setState({
      verify: false,
      clickin: true,
    });
  }
  /////////////////////////////////////////////////////////////////////

  render() {
    ///////////////////////////////////////////////////////////////////

    const clickin = this.state.clickin;
    const login = this.state.login;
    const signup = this.state.signup;
    const home = this.state.home;
    const verify = this.state.verify;

    ///////////////////////////////////////////////////////////////////

    if (verify) {
      return (
        <div>
          <Verify handleClickVerify={this.handleClickVerify} />
        </div>
      );
    } else if (clickin) {
      return (
        <div>
          <Clickin
            handleClickLogin={this.handleClickLogin}
            handleClickRegister={this.handleClickRegister}
          />
        </div>
      );
    } else if (signup) {
      return (
        <div>
          <Signup
            handleClickLogin={this.handleClickLogin}
            handleSaveName={this.handleSaveName.bind(this)}
            handleSaveEmail={this.handleSaveEmail.bind(this)}
            handleSavePass={this.handleSavePass.bind(this)}
            sendData={this.sendData.bind(this)}
          />
        </div>
      );
    } else if (login) {
      return (
        <div>
          <Login
            handleClickHome={this.handleClickHome}
            handleSaveName={this.handleSaveName}
            handleSavePass={this.handleSavePass}
            checkData={this.checkData}
          />
        </div>
      );
    } else if (home) {
      return (
        <div>
          <Home />
        </div>
      );
    }
    ///////////////////////////////////////////////////////////////////
  }
}

export default App;
