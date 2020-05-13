import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from "./LandingPage"
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userNameValue: '',
      passwordValue: '',
      users: { userNames: ["amit", "sumit", "ravi", "Naveen"], userPasswords: ["amit", "sumit", "ravi", "Naveen"] }
    };
  }

  changeUserNameValue = (e) => {
    this.setState({ userNameValue: e.target.value })
  }

  changePasswordValue = (e) => {
    this.setState({ passwordValue: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("I am being called");
    const { userNameValue, passwordValue } = this.state;

    //If username or password field is empty, don't go furthur
    if (!userNameValue || !passwordValue) return;

    const index = this.state.users.userNames.indexOf(userNameValue);

    console.log("index is " + index);
    // If username doesn't exist, don't go further
    if (index === -1) {
      window.alert("Invalid UserName"); return;
    }

    //If password is incorrect, don't go further
    if (this.state.users.userPasswords[index] === passwordValue) {
      console.log("Redirect syntax is getting called");
      return <Redirect to="/landingpage" />;
    }
    else { //if password is invalid
      window.alert("Invalid Password"); return;
    }
    this.setState({ userNameValue: '', passwordValue: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter username" value={this.state.userNameValue} onChange={this.changeUserNameValue} />
          <br />
          <input type="password" placeholder="Enter password" value={this.state.passwordValue} onChange={this.changePasswordValue} />
          <br />
          <button>Login</button>
        </form>
      </div>
    )
  }
}

export default LoginPage;
