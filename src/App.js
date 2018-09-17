import React, { Component } from 'react';
import './App.css';
import PasswordInput from './components/PasswordInput';

const SPECIAL_CHARS_REGEX = new RegExp('/[^A-Za-z0-9]/');
const DIGIT_REGEX = new RegExp('/[0-9]/');

PasswordInput.defaultProps = {
goodPasswordPrinciples: [
{
label: "6+ characters",
predicate: password => password.length >= 6
},
{
label: "with at least one digit",
predicate: password => password.match(DIGIT_REGEX) !== null
},
{
label: "with at least one special character",
predicate: password => password.match(SPECIAL_CHARS_REGEX) !== null
}
]
};

class App extends Component {


  render() {
    return (
      <div className="App">
        <PasswordInput/>
      </div>
    );
  }
}

export default App;
