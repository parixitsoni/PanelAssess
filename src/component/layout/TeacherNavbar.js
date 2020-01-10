import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TeacherNavBar extends Component {
constructor(){
    super();
    this.state={
    logout: false
    };
    this.logout = this.logout.bind(this);
    }   

componentDidMount() {
    let localData = sessionStorage.getItem('userData');
    if(localData){
        this.setState({logout: true});
    }
    }

    logout(){
        console.log("Logout");
        sessionStorage.setItem('userData','');
        sessionStorage.clear();
        this.setState({logout: !this.state.logout});
      }
      
static defaultProps={
    title: 'PanelAssess'

};

static PropType = {
    title: PropTypes.string.isRequired
};

    render() {
    
        return (
            <nav className='navbar bg-black'>
                <h1>
                <a href='/Dashbord'><img src={require('../Logo/custom – 1@2x.png')} alt=''/>{this.props.title}</a>
                </h1>
                <ul>
                    <h4><li><a href='/Dashbord'>Report</a></li></h4>
                    <h4><li><a href='/' onClick={this.logout} className="logout">Logout</a></li></h4>
                </ul>
            </nav>
        )
    }
}

export default TeacherNavBar
// 
