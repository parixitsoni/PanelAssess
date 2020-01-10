import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      logout: false
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    let localData = sessionStorage.getItem("userData");
    if (localData) {
      this.setState({ logout: true });
    }
  }

  logout() {
    console.log("Logout");
    sessionStorage.setItem("userData", "");
    sessionStorage.clear();
    this.setState({ logout: !this.state.logout });
  }

  static defaultProps = {
    title: "Pannel Assess"
  };

  static PropType = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className="navbar">
        <h1>
          <Link
            to={{
              pathname: "/Admin",
              state: { semester: this.props.semester }
            }}
          >
            <img
              src={require("../Logo/custom – 1@2x.png")}
              alt=""
              className="NavbarLogo"
            />
            {this.props.title}
          </Link>
        </h1>
        <ul>
          <h4>
            <li>
              <Link
                to={{
                  pathname: "/Admin",
                  state: { semester: this.props.semester }
                }}
              >
                Home
              </Link>
            </li>
          </h4>
          <h4>
            <li>
              <a href="/" onClick={this.logout} className="logout">
                Logout
              </a>
            </li>
          </h4>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
