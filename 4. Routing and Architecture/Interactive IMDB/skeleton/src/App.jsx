import React, { Fragment, Component, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header/Header.jsx';
import './App.css';

const Home = lazy(() => import('./Home/Home.jsx'));
const Register = lazy(() => import('./Register/Register.jsx'));
const Login = lazy(() => import('./Login/Login.jsx'));
const Create = lazy(() => import('./Create/Create.jsx'));

const NotFound = () => {
  return (
    <div>
      <h1>Error 404: Page Not Found</h1>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.username,
      isAdmin: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  async componentDidMount() {
    const localUsername = localStorage.getItem('username');
    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    if (localUsername) {
      this.setState({
        user: localUsername,
        isAdmin: isAdmin
      });
    }

    const movies = await fetch('http://localhost:9999/feed/movies');
    const json = await movies.json();

    this.setState({
      movies: json.movies
    });
  }

  async handleSubmit(event, data, path) {
    event.preventDefault();

    try {
      const postData = await fetch('http://localhost:9999' + path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const json = await postData.json();

      if (json.username) {
        this.setState({
          username: json.username,
          isAdmin: json.isAdmin
        });

        localStorage.setItem('username', json.username);
        localStorage.setItem('isAdmin', json.isAdmin);

        toast.success(`Welcome, ${this.state.username}`);
      } else if (json.movie) {
        toast.success(json.message);
      } else {
        toast.error(json.message);
      }
    } catch (error) {
      toast.error(error);
    }
  }

  handleLogout(event) {
    event.preventDefault();

    toast.success('Successfully logout.');

    this.setState({
      username: '',
      isAdmin: false
    });

    this.localStorage.clear();
  }


  render() {
    return (
      <div className="App">
        <ToastContainer autoClose={1400} closeButton={false} />
        <Router>
          <Fragment>
            <Suspense fallback={<span>Loading...</span>}>
              <Header {...this.state} handleLogout={this.handleLogout} />
              <Switch>
                <Route path="/" render={(props) => <Home {...props} {...this.state} />} exact />
                <Route path="/register" render={() => <Register handleSubmit={this.handleSubmit} />} exact />
                <Route path="/login" render={() =>
                  this.state.username
                    ?
                    <Redirect to="/" />
                    :
                    <Login handleSubmit={this.handleSubmit} />} exact
                />
                <Route path="/create" render={() =>
                  this.state.isAdmin
                    ?
                    <Create handleSubmit={this.handleSubmit} />
                    :
                    <Redirect to={{ pathname: "/login" }} />} exact
                />
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;