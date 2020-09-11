import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { githubname: '' };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.githubname);
  }
  myChangeHandler = (event) => {
    this.setState({githubname: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Hello your Githubname</h1>
      <p>Enter your name, and submit:</p>
      <label> githubname </label>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <br />
      <input
        type='submit'
      />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));