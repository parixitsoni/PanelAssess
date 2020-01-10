import React from 'react'; 
import Navbar from '../layout/NavBar';
import InputRange from 'react-input-range';
import axios from "axios";

class Feed2 extends React.Component {
constructor(props) {
  super(props);
  this.state = { value6: 0, value7: 0, value8: 0, value9: 0, value10:0, value11:0, value12:0, value13:0, teachername: null , semester:null   };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.setname = this.setname.bind(this);
  console.log(this.props)
}

handleChange(e) {
  this.setState({ value: e.target.value });
}

componentDidMount() {
  this.setname();
}

setname() {
  this.setState({
      teachername: this.props.location.state.teachername,
    semester:this.props.match.params.semester });
}

handleSubmit(e) {
e.preventDefault();
const teachername = this.props.location.state.teachername;
const semester = this.props.location.state.semester;
console.log(this.state)

if(this.state.value6 || this.state.value7 || this.state.value8 || this.state.value9 || this.state.value10 || this.state.value11 || this.state.value12 || this.state.value13 ) {
  axios.post("http://localhost/Database/php/react-php/api/index.php?tp=rate1", this.state)
  .then(res => {
    console.log(res)
    this.props.history.push('/feed3',{ teachername: teachername,semester:semester });  
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
      <label className='FeedLabel'>B. SUBJECT COMMAND & COMMUNICATION SKILLS</label>
        <div className='container'>
        <form onSubmit={this.handleSubmit}>

        <div className='FeedCard'>        
          <p className='feedP'>Focus on Syllabi</p>
          <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value6} onChange={value6 => this.setState({ value6 })} />
        </div>

        <div className='FeedCard'>
          <p className='feedP'>Self-confidence</p>
          <InputRange maxValue={10} className='slider' minValue={0}  value={this.state.value7} onChange={value7 => this.setState({ value7 })} />
        </div>

        <div className='FeedCard'>
          <p className='feedP'>Communication skills</p>
          <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value8} onChange={value8 => this.setState({ value8 })} />
        </div>

        <div className='FeedCard'>          
          <p className='feedP'>Conducting classroom discussions</p>
          <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value9} onChange={value9 => this.setState({ value9 })} />
        </div>

        <div className='FeedCard'>  
          <p className='feedP'>Teaching the subject matter</p>
          <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value10} onChange={value10 => this.setState({ value10 })} />
        </div>  

        <div className='FeedCard'>
          <p className='feedP'>Skill of linking subject to life experience & creating intrest in the subject</p>
          <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value11} onChange={value11 => this.setState({ value11 })} />
        </div>

        <div className='FeedCard'>
          <p className='feedP'>Reference to latest developments in the field</p>
          <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value12} onChange={value12 => this.setState({ value12 })} />
        </div>
          
          
          <button type="submit" className='FeedSubmitButton WelcomeButton WelcomeButton--submit' onClick={this.rate1}>Next</button>
          

            </form>
        </div>
        
    </div>

);  
  }
}

export default Feed2; 