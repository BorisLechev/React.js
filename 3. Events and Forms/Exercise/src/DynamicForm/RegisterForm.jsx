import React from 'react';
import './register.css';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
        };

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
            <div className="Register">
                <h1>Sign Up</h1>
                <form onSubmit={(event) => {
                    // TODO: prevent the default behavior of the event and use the registerUser function by passing it the data from the form
                    event.preventDefault(); // do not refresh the whole page
                    this.props.registerUser(this.state);  //registerUser in App.jsx this.state obj with entered data
                }}>
                    <label>Username</label>
                    <input type="text" id="usernameReg" name="username" onChange={this.handleFormChange} />
                    <label>Email</label>
                    <input type="text" id="emailReg" name="email" onChange={this.handleFormChange} />
                    <label>Password</label>
                    <input type="password" id="passwordReg" name="password" onChange={this.handleFormChange} />
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        )
    }
}
export default RegisterForm;