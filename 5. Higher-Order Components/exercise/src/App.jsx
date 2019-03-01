import React, { Fragment, Component } from 'react';
import './App.css';
import Article from './components/Article/Article';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Navigation from './components/Navigation/Navigation';
import warningWrapper from './hocs/warningWrapper';
import errorHandlingWrapper from './hocs/errorHandlingWrapper';
import BindingForm from './components/BindingForm/BindingForm';

const ArticleWithWarning = warningWrapper(errorHandlingWrapper(Article));
const NavigationWithWarning = warningWrapper(errorHandlingWrapper(Navigation));
const RegisterWithWarning = warningWrapper(errorHandlingWrapper(RegisterForm));

class App extends Component {
  onSubmit(event, data) {
    event.preventDefault();

    console.log(data);
  }

  render() {
    return (
      <Fragment>
        <BindingForm onSubmit={this.onSubmit}>
          <h1>Login Form</h1>
          <input type="text" name="username" placeholder="gosho" />
          <input type="password" name="password" placeholder="password" />
        </BindingForm>
        <BindingForm onSubmit={this.onSubmit}>
          <h1>Create Film Form</h1>
          <input type="text" name="film" placeholder="film" />
          <input type="text" name="description" placeholder="description" />
          <input type="text" name="postUrl" placeholder="postUrl" />
        </BindingForm>
        <ArticleWithWarning />
        <RegisterWithWarning />
        <NavigationWithWarning />
      </Fragment>
    );
  }
}

export default App;
