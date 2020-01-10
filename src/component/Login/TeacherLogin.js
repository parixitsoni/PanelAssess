import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { PostData } from "../../services/PostData";

class TeacherLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {un: "",pwd: "",redirectToReferrer: false};
    this.Teacherlogin = this.Teacherlogin.bind(this);
    this.onChange = this.onChange.bind(this);
  }

Teacherlogin() {
if (this.state.un && this.state.pwd) {
  PostData("Teacherlogin", this.state)
  .then(result => {
    let responseJson = result;
    if (responseJson.userData) {
      sessionStorage.setItem("userData", JSON.stringify(responseJson));
      this.setState({ teacher_name: responseJson.userData.teacher_name });
      console.log(responseJson.userData.teacher_name);
      this.setState({ redirectToReferrer: true });
    } 
    else {
      alert(result.error);
    }
  });
}
console.log(this.state)
}

onChange(e) {
  this.setState({ [e.target.name]: e.target.value });
}

render() {
  if (this.state.redirectToReferrer) {
    var teacher_name = this.state.teacher_name
    return(<Redirect to={{ pathname: "/Dashbord", state: { teacher_name: teacher_name }}} />);
  }
    
return (
  <div className='backgroundImage'>
  <div className="Welcomecontainer" id="Body">
        <div className="row">
              <h2 id="welcomeText" className='p-1'>Teacher Login</h2>
      <input type="text" name="un" className='StudentLogin' placeholder="Username" onChange={this.onChange} />
      <input type="password" name="pwd" className='StudentLoginn' placeholder="Password" onChange={this.onChange} />
      <input type="submit" className="WelcomeButton WelcomeButton--blue WelcomeButton--submit" value="Login" onClick={this.Teacherlogin} />
    </div>
  </div>
  </div>
);
}
}
export default TeacherLogin;
