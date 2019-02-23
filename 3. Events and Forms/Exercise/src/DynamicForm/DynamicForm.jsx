import React from "react";
import RegisterForm from "./RegisterForm.jsx";
import LogInForm from "./LoginForm.jsx";
import CreateForm from "../Games/CreateForm.jsx";

class DynamicForm extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {
                        /*TODO: render a form depending on wheather the loginForm property is true*/
                        //if we are logged
                        this.props.user
                            ?
                            (<CreateForm createGame={this.props.createGame} />) // createForm from appContent
                            :
                            (this.props.loginForm
                                ?
                                (<LogInForm loginUser={this.props.loginUser} />) // loginUser from AppContent
                                :                                        // registerUser from AppContent           
                                (<RegisterForm registerUser={this.props.registerUser} />)) // registerUser for props (React Dev Tools)
                    }
                </div>
            </div>
        )
    }
}

export default DynamicForm