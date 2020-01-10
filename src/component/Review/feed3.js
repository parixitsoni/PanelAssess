import React from 'react'; 
import Navbar from '../layout/NavBar';
import InputRange from 'react-input-range';
import axios from "axios";

class Feed3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value13:0, value14: 0, value15: 0, value16: 0, value17: 0, teachername: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setname = this.setname.bind(this);
  }

handleChange(e) {
  this.setState({ value: e.target.value });
}
  
componentDidMount() {
  this.setname();
}

setname() {
this.setState({ teachername: this.props.location.state.teachername });
}

handleSubmit(e) {
e.preventDefault();
const teachername = this.props.location.state.teachername;
const semester = this.props.location.state.semester;

if(this.state.value14 || this.state.value15 || this.state.value16 || this.state.value17 || this.state.value18) {
  axios.post("http://localhost/Database/php/react-php/api/index.php?tp=rate2", this.state)
  .then(res => {
    console.log(res)
    this.props.history.push('/Admin',{  teachername: teachername, semester: semester });  
  })
    .catch(function(error) {
      console.log(error);
    });
}
}

render() {
  return(
  <div>
    <Navbar semester={this.props.location.state.semester}/>
    
      <label className='FeedLabel'>C. TEACHING SKILLS</label>
      <div className='container'>

      <form onSubmit={this.handleSubmit}>
          <div className='FeedCard'>  
                  <p className='feedP'>Uses of teaching aids (OHP/Blackboard/PPT's)</p>
                  <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value13} onChange={value13 => this.setState({ value13 })} />
          </div>

          <div className='FeedCard'>   
                  <p className='feedP'>Blackboard/Whiteboard work in terms of legibility, visibility and structure</p>
                  <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value14} onChange={value14 => this.setState({ value14 })} />
          </div>   

          <div className='FeedCard'>
                  <p className='feedP'>Uses of innovation teaching methods</p>
                  <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value15} onChange={value15 => this.setState({ value15 })} />
          </div>

          <div className='FeedCard'>  
                  <p className='feedP'>Shares the answers of class tests or sessional test questions</p>
                  <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value16} onChange={value16 => this.setState({ value16 })} />
          </div>

          <div className='FeedCard'>                 
                  <p className='feedP'>Shows the evaluated answer books of class tests to the students</p>
                  <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value17} onChange={value17 => this.setState({ value17 })} />
          </div>    
              
          <a href="/Admin"><button type="submit" className='FeedSubmitButton WelcomeButton WelcomeButton--submit' onClick={this.rate2}>Submit</button></a>
                
          </form>
      </div>

  </div>

    );
  }
}

export default Feed3; 

