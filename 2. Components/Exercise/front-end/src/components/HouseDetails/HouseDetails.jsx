import React from 'react';
import './HouseDetails.css';

const HouseDetails = (props) => (
    <div className="houseDetails">
        <h2>{props.description}</h2>
        <img src={props.imageUrl} alt="houseImage" />
        <p>Description: {props.description}</p>
        <p>Price: {props.price}</p>
    </div>
);

export default HouseDetails;