import React from "react";
import Navbar from "../layout/NavBar";
import InputRange from "react-input-range";
import axios from "axios";
import "react-confirm-alert/src/react-confirm-alert.css";

class Feed extends React.Component {
constructor(props) {
super(props);
this.state = {value: 0,value1: 0,value2: 0,value3: 0,value4: 0,value5: 0, teachername: null, semester:null};
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.setname = this.setname.bind(this);
}

componentDidMount() {
  this.setname();
}
setname() {
this.setState({ 
  teachername: this.props.match.params.id,
  semester:this.props.match.params.semester
});
}

handleChange(e) {
this.setState({ value: e.target.value });
}

handleSubmit(e) {
e.preventDefault();
const teachername = this.props.match.params.id;
const semester = this.props.match.params.semester;
   
if(this.state.value || this.state.value1 || this.state.value2 || this.state.value3 || this.state.value4 || this.state.value5 ) {    
  axios.post("http://localhost/Database/php/react-php/api/index.php?tp=rate", this.state)
  .then(res => {
     console.log(res)
        this.props.history.push('/feed2',{ teachername: teachername, semester:semester });  
      })
    .catch(function(error) {
      console.log(error);
    });
  }
}

render() {
return (
  <div>
    <Navbar />
    <label className="FeedLabel">A. TIME MANAGEMENT SKILLS</label>

    <div className="container">
      <form onSubmit={this.handleSubmit} className="d-flex flex-row">
        <div className="FeedCard">
          <p className="feedP"><label htmlFor="question" className="jumbotron">Punctuality in the Class</label></p>
          <InputRange maxValue={10} className="slider" minValue={0} value={this.state.value} onChange={value => this.setState({ value })} />
        </div>

        <div className="FeedCard">
          <p className="feedP"><label htmlFor="question" className="">Regularity in taking Classes</label></p>
          <InputRange maxValue={10} className="slider" minValue={0} value={this.state.value1} onChange={value1 => this.setState({ value1 })} />
        </div>

        <div className="FeedCard">
          <p className="feedP"><label htmlFor="question" className="">Student's attendance/presence in the class of teacher who is being evaluated</label></p>
          <InputRange maxValue={10} className="slider" minValue={0} value={this.state.value2} onChange={value2 => this.setState({ value2 })} />
        </div>

        <div className="FeedCard">
          <p className="feedP"><label htmlFor="question" className="">Completes syllabus of the course as per teaching plan</label></p>
          <InputRange maxValue={10} className="slider" minValue={0} value={this.state.value3} onChange={value3 => this.setState({ value3 })} />
        </div>

        <div className="FeedCard">
          <p className="feedP"><label htmlFor="question" className="">Scheduled organization of assignments, class, test, quizzes and seminars</label></p>
          <InputRange maxValue={10} className="slider" minValue={0} value={this.state.value4} onChange={value4 => this.setState({ value4 })} />
        </div>

        <div className="FeedCard">
          <p className="feedP"><label htmlFor="question" className="">Makes alternate arrangement of class in his/her absence</label></p>
          <InputRange maxValue={10} className="slider" minValue={0} value={this.state.value5} onChange={value5 => this.setState({ value5 })} />
        </div>

        <button type="submit" className="FeedSubmitButton WelcomeButton WelcomeButton--submit" onClick={this.handleSubmit}>Next</button>
    </form>
  </div>
</div>
    );
  }
}

export default Feed;
