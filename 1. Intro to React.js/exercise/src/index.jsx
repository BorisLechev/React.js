import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './style/app.css';
import contacts from "./data/contacts";

let currentlySelectedContactIndex = 0;
const htmlArray = [];

const render = () => (
    ReactDOM.render(
        <Main />,
        document.getElementById("root")
    )
);

const handleContactClick = (index) => {
    currentlySelectedContactIndex = index;
    render();
};

const Contacts = () => (
    htmlArray
    //contacts.map((contact,index)=><span key={index}>{contact.firstName}</span>)
);

const Details = (props) => (
    <div id="details">
        <h1>Details</h1>
        <div className="content">
            <div className="info">
                <div className="col">
                    <span className="avatar">&#9787;</span>
                </div>
                <div className="col">
                    <span className="name">{contacts[props.index].firstName}</span>
                    <span className="name">{contacts[props.index].lastName}</span>
                </div>
            </div>
            <div className="info">
                <span className="info-line">&phone; {contacts[props.index].phone}</span>
                <span className="info-line">&#9993; {contacts[props.index].email}</span>
            </div>
        </div>
    </div>
);

const Footer = () => (
    <footer>Contact Book SPA &copy; 2019</footer>
);

const Main = () => (
    <div className="container">
        <header>&#9993; Contact Book</header>
        <div id="book">
            <div id="list">
                <h1>Contacts</h1>
                <div className="content">
                    <Contacts />
                </div>
            </div>
            <Details index={currentlySelectedContactIndex} />
        </div>
        <Footer />
    </div>
);

contacts.map((contact, index) => {
    htmlArray.push(<div onClick={() => handleContactClick(index)} key={index} className="contact" data-id="id">
        <span className="avatar small">&#9787;</span>
        <span className="title">{contact.firstName} {contact.lastName}</span>
    </div>);
});

render();