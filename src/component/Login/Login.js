import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { PostData } from "../../services/PostData";


class Login extends Component {
constructor() {
  super();
  this.state = {un: "",pwd: "", redirectToReferrer: false, semester: "" };
  this.login = this.login.bind(this);
  this.onChange = this.onChange.bind(this);
}

login() {
    if (this.state.un && this.state.pwd) {
      PostData("login", this.state).then(result => {
        let responseJson = result;
        if (responseJson.userData) {
          this.setState({ semester: responseJson.userData.sem_name });
          console.log(this.state.semester);
          sessionStorage.setItem("userData", JSON.stringify(responseJson));
          this.setState({ redirectToReferrer: true });
        } else {
          alert(result.error);
        }
      });
    }
  }
onChange(e) {
  this.setState({ [e.target.name]: e.target.value });
}

render() {
  if (this.state.redirectToReferrer) {
    var semester = this.state.semester
    return (<Redirect to={{ pathname: "/Admin", state: { semester: semester }}}/>);
  }

return (
  <div className="backgroundImage">
    <div className="Welcomecontainer" id="Body">
      <div className="row">
              <h2 id="welcomeText" className="p-1">Student Login</h2>
        <input type="text" name="un" className="StudentLogin" placeholder="Username" onChange={this.onChange} />
        <input type="password" name="pwd" className="StudentLoginn" placeholder="Password" onChange={this.onChange} />
        <input type="submit" className="WelcomeButton WelcomeButton--blue WelcomeButton--submit LoginStud" value="Login" onClick={this.login} />
      </div>
    </div>
  </div>
);
}
}
export default Login;
