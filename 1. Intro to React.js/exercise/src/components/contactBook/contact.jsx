import React from "react";

const Contact = (props) => {
    return (
        <div class="contact" data-id="{id}">
            <span class="avatar small">&#9787;</span>
            <span class="title">{props.firstName} {props.lastName}</span>
        </div>
    );
};

export default Contact;