import React from 'react';
import './login.css';

class LogInForm extends React.Component {
    constructor(props) {
        super(props);

        this.setState({
            username: '',
            password: ''
        });

        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleFormChange(event) {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="Login">
                <h1>Login</h1>
                <form onSubmit={(event) => {
                    // TODO: prevent the default behavior of the event and use the loginUser function by passing it the data from the form
                    event.preventDefault(); // do not refresh the whole page
                    this.props.loginUser(this.state); // loginUser from App.jsx this.state obj with entered data
                }}>
                    <label>Usersname</label>
                    <input type="text" id="usernameLogin" name="username" onChange={this.handleFormChange} />
                    <label>Password</label>
                    <input type="password" id="passwordLogin" name="password" onChange={this.handleFormChange} />
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

export default LogInForm;
