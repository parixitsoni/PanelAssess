import React, { Component } from "react";
import { Bar, Doughnut,Line } from "react-chartjs-2";
import TeacherNavBar from "./TeacherNavbar";
import axios from "axios";

class Dashbord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data1: [],
      data2: [],      
      teacher_name: this.props.location.state.teacher_name
    };
    this.function1=this.function1.bind(this)
    this.function2=this.function2.bind(this)
    this.function3=this.function3.bind(this)
  }
  componentDidMount() {
    this.function1();
    this.function2();
    this.function3();
    
  }
  function1(){
    axios
      .post("http://localhost/Database/php/react-php/api/index.php?tp=review", this.state)
      .then(res => {
        console.log(res);
        this.setState({  data:res.data.chartData});
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  function2(){
    axios
      .post("http://localhost/Database/php/react-php/api/index.php?tp=review1", this.state)
      .then(res => {
        this.setState({  data1: res.data.chartData1 });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  function3(){
    axios
      .post("http://localhost/Database/php/react-php/api/index.php?tp=review2", this.state)
      .then(res => {
        this.setState({  data2: res.data.chartData2  });
      })
      .catch(function(error) {
        console.log(error);
      });
  }


  render() {
    const bardata = {
      labels: [
        "Punctuality",
        "Regularity",
        " Attendance evaluation",
        "Completes syllabus",
        "assignments, class, test, quizzes and seminars",
        "alternate arrangement of class"
      ],
      datasets: [
        {
          label: "TIME MANAGEMENT SKILLS",
          data: this.state.data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ],
      options: {
        scales: {
          xAxes: [{ gridLines: { drawOnChartArea: false } }],
          yAxes: [{ gridLines: { display: false } }]
        }
      }
    };
    //
    const bardata1 = {

      labels: [
        "Focus on Syllabi",
        "Self-confidence",
        "Communication skills",
        "Classroom discussion",
        "Teaching the subject matter",
        "Creating intrest in subject",
        "Reference to latest development in field"
      ],
      datasets: [
        {
          label: "SUBJECT COMMAND & COMMUNICATION SKILLS",
          data: this.state.data1,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ],
      options: {
        scales: {
          xAxes: [{ gridLines: { drawOnChartArea: false } }],
          yAxes: [{ gridLines: { display: false } }]
        }
      }
    };
    // //
    const bardata2 = {
      labels: [
        "Use of teaching aids",
        "Work in terms of legibility",
        "Use of innovative teaching method",
        "Share the answer of class test",
        "Shows the evaluated answer books"
      ],
      datasets: [
        {
          label: "TEACHING SKILLS",
          data: this.state.data2,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ],
      options: {
        scales: {
          xAxes: [{ gridLines: { drawOnChartArea: false } }],
          yAxes: [{ gridLines: { display: false } }]
        }
      }
    };
    return (
      <div className="App">
        <TeacherNavBar />
        <div className="container">
          <div className="card cardDiv">
            <div className="card-body">
              <Bar data={bardata} />
            </div>
          </div>

          <div className="card cardDiv">
            <div className="card-body">
              <Line data={bardata1} />
            </div>
          </div>

          <div className="card cardDiv">
            <div className="card-body">
              <Doughnut data={bardata2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashbord;
