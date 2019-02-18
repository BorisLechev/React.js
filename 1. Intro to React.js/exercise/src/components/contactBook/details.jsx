import React from "react";

const Details = (props) => {
    return (
        <h1>Details</h1>
        <div class="content">
            <div class="info">
                <div class="col">
                    <span class="avatar">&#9787;</span>
                </div>
                <div class="col">
                    <span class="name">{props.firstName}</span>
                    <span class="name">{props.lastName}</span>
                </div>
            </div>
            <div class="info">
                <span class="info-line">&phone; {props.phone}</span>
                <span class="info-line">&#9993; {props.email}</span>
            </div>
        </div>
    );
};

export default Details;