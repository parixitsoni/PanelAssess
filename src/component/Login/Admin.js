import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/NavBar";
import { PostData } from "../../services/PostData";
import Linkify from "react-linkify";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [],userFeed: "", redirectToReferrer: false,semester: this.props.location.state.semester};
    console.log(this.state);
  }
  componentDidMount() {
    PostData("feed", this.state).then(result => {
      let responseJson = result;
      this.setState({ data: responseJson.feedData });
    });
  }

render() {
  let userFeed = this.state.data.map((feedData, index) => {
    return (
  <div className='cardMain' key={index} style={userStyle}>
     <h4 className='cardText'><Linkify>{feedData}</Linkify></h4>
    
     <div className='RateButtonClass'>
      <Link to={`/feed/${feedData}/${this.props.location.state.semester}`}><button className="btn btn-dark btn-lg my-1 RateButton">Rate</button></Link>
      </div>
  </div>
    );
  })

  return (
<div className="App">
<Navbar semester={this.props.location.state.semester}/>
<div className="container ">
  <div>
   <div style={userStyle}>{userFeed}</div>
   </div>
</div>
</div>
);
}
}
const userStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gridGap: '1rem',
      // height:'150px'

};
