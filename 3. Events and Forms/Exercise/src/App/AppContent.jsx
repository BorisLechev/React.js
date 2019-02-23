import React, {Component} from 'react';
import DynamicForm from "../DynamicForm/DynamicForm.jsx";
import NestedGrid from "../Games/NestedGrid.jsx";

const divStyle = {
    marginTop: '70px'
};

class AppContent extends Component {

    render() {
        return (
            <div style={divStyle}>
                <DynamicForm
                    registerUser={this.props.registerUser}
                    loginUser={this.props.loginUser}
                    loginForm={this.props.loginForm}
                    regForm={this.props.regForm}
                    user={this.props.user}
                    createGame={this.props.createGame}
                />
                <NestedGrid games={this.props.games}/>
            </div>
        )
    }
}

export default AppContent;