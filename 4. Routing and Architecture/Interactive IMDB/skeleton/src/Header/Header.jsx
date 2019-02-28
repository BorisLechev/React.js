import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.handleLogout();
    }

    render() {
        return (
            <div className="App" >
                <header>
                    <NavLink to="/" exact className="logo">Interactive IMDB</NavLink>
                    <div className="header-right">
                        <NavLink exact to="/">Home</NavLink>
                        {
                            this.props.username
                                ?
                                (<span>
                                    <NavLink exact to="#">Welcome {this.props.username}!</NavLink>

                                    {
                                        this.props.isAdmin
                                            ?
                                            (
                                                <NavLink exact to="/create">Create</NavLink>
                                            )
                                            :
                                            ('')
                                    }
                                    <NavLink to="#" onClick={this.handleLogout}>Logout</NavLink>
                                </span>)
                                :
                                (
                                    <span>
                                        <NavLink exact to="/register">Register</NavLink>
                                        <NavLink exact to="/login">Login</NavLink>
                                    </span>
                                )
                        }
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;