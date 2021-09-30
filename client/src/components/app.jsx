import React, { Component } from "react";
import Login from "./login-signup/login.jsx";
import Signup from "./login-signup/signup.jsx";
import Home from "./home/home.jsx";
import Clickin from "./login-signup/clickin.jsx";
import Verify from "./login-signup/verify.jsx";
import PutJob from "./home/put-job.jsx";
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
      company_name: "",
      phone_number: "",
      job_name: "",
      description: "",
      newNumber: "",
      jobData: [],
      clickin: false,
      login: false,
      signup: false,
      home: false,
      putjob: false,
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
    this.handleClickField = this.handleClickField.bind(this);
    this.sendData = this.sendData.bind(this);
    this.checkData = this.checkData.bind(this);
    this.postData = this.postData.bind(this);
    // this.updateData = this.updateData.bind(this);
    this.handleSaveCompName = this.handleSaveCompName.bind(this);
    this.handleSavePhoneNum = this.handleSavePhoneNum.bind(this);
    this.handleSaveJobName = this.handleSaveJobName.bind(this);
    this.handleSaveDescription = this.handleSaveDescription.bind(this);
    this.handleSaveNum = this.handleSaveNum.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.alertLogin = this.alertLogin.bind(this);
  }

  //////////////////////Get the Data from Database///////////////////////

  componentDidMount() {
    this.getData();
  }
  getData() {
    axios.get("http://localhost:1337/read").then((response) => {
      this.setState({
        jobData: response.data,
      });
    });
  }

  /////////////////////////Update and delete the data///////////////////
  // updateData(id) {
  //   axios.put("http://localhost:1337/update", {
  //     id: id,
  //     newNumber: this.state.newNumber,
  //   });

  // }

  deleteData(id) {
    axios.delete(`http://localhost:1337/delete/${id}`)
    //   .then((data) => console.log(data));
    // this.alertLogin();
    .then((res)=>{   
      
this.setState({jobData:res.data})
    })
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
  handleSaveCompName(e) {
    this.setState({
      company_name: e.target.value,
    });
  }
  handleSavePhoneNum(e) {
    this.setState({
      phone_number: e.target.value,
    });
  }
  handleSaveJobName(e) {
    this.setState({
      job_name: e.target.value,
    });
  }
  handleSaveDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  handleSaveNum(e) {
    this.setState({
      newNumber: e.target.value,
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
    this.alertLogin();
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
  //////////////////////Send Job List To DataBase///////////////////
  postData(e) {
    e.preventDefault();
    axios
      .post("http://localhost:1337/insert", {
        company_name: this.state.company_name,
        phone_number: this.state.phone_number,
        job_name: this.state.job_name,
        description: this.state.description,
      })
      .then((res) => {
        let jobData = this.state.jobData;
        jobData.push(res.data);
        console.log(jobData);
        this.setState({
          jobData,
        });
      });
    // this.handleClickHome();
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
      putjob: false,
      home: true,
    });
  }
  handleClickVerify() {
    this.setState({
      verify: false,
      clickin: true,
    });
  }
  handleClickField() {
    this.setState({
      home: false,
      putjob: true,
    });
  }

  alertLogin() {
    alert("WELCOME IN BURKINA CAREER");
  }

  /////////////////////////////////////////////////////////////////////
  render() {
    ///////////////////////////////////////////////////////////////////
    const clickin = this.state.clickin;
    const login = this.state.login;
    const signup = this.state.signup;
    const home = this.state.home;
    const verify = this.state.verify;
    const putjob = this.state.putjob;
    //////////////////////Rendring Components on click/////////////////////////////

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
          <Home handleClickField={this.handleClickField} />
        </div>
      );
    } else if (putjob) {
      return (
        <div>
          <PutJob
            handleSaveCompName={this.handleSaveCompName}
            handleSavePhoneNum={this.handleSavePhoneNum}
            handleSaveJobName={this.handleSaveJobName}
            handleSaveDescription={this.handleSaveDescription}
            postData={this.postData}
            handleSaveNum={this.handleSaveNum}
            // updateData={this.updateData}
          />

          {this.state.jobData.map((val, i) => (
            <div key={i} className="box">
              <label>company name :</label>
              <h4>{val.company_name}</h4>
              <label>job name :</label>
              <h4>{val.job_name}</h4>
              <label>phone number :</label>
              <h4>{val.phone_number}</h4>
              <label>description :</label>
              <h4>{val.description}</h4>
              <br />
              <br />
              {/* <input
                type="text"
                className="in"
                placeholder="edit here..."
                // handleSaveNum={this.handleSaveNum}
              />
              <button onClick={this.updateData(val._id)}>UPDATE</button> */}
              <button
                onClick={(e) => { e.preventDefault()
                  this.deleteData(val._id);
                }}
              >
                DELETE
              </button>
            </div>
          ))}
        </div>
      );
    }
    ///////////////////////////////////////////////////////////////////
  }
}

export default App;
