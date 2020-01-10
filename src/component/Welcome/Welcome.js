import React, {Component} from 'react';


class Welcome extends Component {
render() {
return (
<div className='container'>
    <div className='backgroundImage'>
          <div className="Welcomecontainer">
            <div className="row">
                <img src={require('../Logo/custom1.png')}  className='WelcomeLogo' alt='logo' />
                  <h1 className='WelcomeText'>Welcome to PanelAssess</h1>
                <p className='WelcomeNote'>A feedback-based assessment tool for teachers.</p>

                <div className="WelcomeTeacherLoginDiv">
                    <a href="/TeacherLogin" className="WelcomeButton WelcomeButton--blue WelcomeButton--submit">Teachers Login<img src={require('../Logo/teacher.svg')} alt=''className='TeacherButtonLogo'/></a>
                </div>

                <div className="WelcomeStudentLoginDiv">
                     <a href="/Login" className="WelcomeButton WelcomeButton--black WelcomeButton--submit">Students Login <img src={require('../Logo/student1x.png')} alt=''className='StudentButtonLogo'/></a>
                </div>
            </div>
          </div>
    </div> 
</div>
);
}
}

export default Welcome;