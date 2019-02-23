import React, { Component } from 'react';
import './App.css';
import AppHeader from './App/AppHeader.jsx';
import AppContent from './App/AppContent.jsx';
import AppFooter from './App/AppFooter.jsx';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null,
            games: [],
            hasFetched: false,
            loginForm: false,
            showSnack: false,
            message: 'TestMessage!'
        };
    }

    async postToAuth(user, signup) {
        const postData = await fetch('http://localhost:9999/auth/sign' + (signup
            ? 'up' : 'in'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            });

        const json = await postData.json();

        if (json.errors) {
            json.errors.map(error => {
                console.log(error);
            });
        } else {
            localStorage.setItem('username', json.username);
            localStorage.setItem("userId", json.userId);

            this.setState({
                user: json.username,
                message: json.message,
                showSnack: true
            });
        }
    }

    registerUser(user) {
        // TODO: register a user and login
        this.postToAuth(user, true);
    }

    loginUser(user) {
        // TODO: login a user and set sessionStorage items username and token
        this.postToAuth(user, false);
    }

    logout(event) {
        // TODO: prevent the default state
        event.preventDefault();
        // TODO: delete the data from the sessionStorage
        localStorage.clear();
        // TODO: update the state (user: null)
        this.setState({
            user: null,
            message: 'Successfully logged out!',
            showSnack: true
        });
    }

    componentWillMount() {
        // TODO: check if there is a logged in user using the sessionStorage (if so, update the state, otherwise set the user to null)
        const localUsername = localStorage.getItem('username');

        if (localUsername) {
            this.setState({
                user: localUsername
            });
        }
        // TODO: fetch all the games
        this.fetchGames();
    }

    async createGame(data) {
        // TODO: create a game using fetch with a post method then fetch all the games and update the state 
        const postInputCreateGame = await fetch('http://localhost:9999/feed/game/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const json = await postInputCreateGame.json();

        if (json.errors) {
            json.errors.map(error => {
                console.log(error);
            });
        } else {
            this.fetchGames();
        }
    }

    async fetchGames() {
        const getAllGames = await fetch('http://localhost:9999/feed/games');
        const json = await getAllGames.json();

        this.setState({
            games: json.games,  // games is array
            message: json.message,
            showSnack: true
        });
    }

    switchForm() {
        // TODO: switch the value of the loginForm property
        this.setState({
            loginForm: !this.state.loginForm // when we click login change to sign up and vice versa
        });
    }

    render() {
        return (
            <main>
                <AppHeader
                    user={this.state.user}
                    logout={this.logout.bind(this)}
                    switchForm={this.switchForm.bind(this)}
                    loginForm={this.state.loginForm}
                />
                <AppContent
                    registerUser={this.registerUser.bind(this)}
                    loginUser={this.loginUser.bind(this)}
                    games={this.state.games}
                    createGame={this.createGame.bind(this)}
                    user={this.state.user}
                    loginForm={this.state.loginForm}
                    showSnack={this.state.showSnack}
                />
                <AppFooter message={this.state.message} showSnack={this.state.showSnack} />
            </main>
        )
    }
}

export default App;