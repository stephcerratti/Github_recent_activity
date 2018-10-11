import React, { Component } from "react";
import ReactDOM from "react-dom";
import Login from "./Login.js";
import Profile from "./Profile.js";
import Button from "./Button.js";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedin: false,
      username: "",
      profile: {},
      events: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogin() {
    this.getGithubUser(this.state.username)
      .then(res => res.json())
      .then(data => this.setState({ profile: data, loggedin: true }));
  }

  handleLogOut() {
    this.setState({ loggedin: false, profile: {}, username: "" });
  }

  getGithubUser(username) {
    return fetch(`https://api.github.com/users/${username}`);
  }

  getGithubEvents(url) {
    return fetch(url);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.loggedin !== this.state.loggedin) {
      if (this.state.loggedin) {
        this.getGithubEvents(this.state.profile.events)
          .then(res => res.json())
          .then(data => this.setState({ events: data }));
      }
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <h1>GitHub Recent Activity</h1>
        {this.state.loggedin ? (
          <Profile
            {...this.state.profile}
            events={this.props.events}
            handleLogout={this.handleLogout}
          />
        ) : (
          <Login
            handleChange={this.handleChange}
            handleLogin={this.handleLogin}
            username={this.state.username}
          />
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
