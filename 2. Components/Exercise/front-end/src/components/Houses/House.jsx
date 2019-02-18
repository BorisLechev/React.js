import React from 'react';
import './House.css';

const House = (props) => (
    <div className="house" onMouseEnter={() => props.houseHoverEvent(props.id)}>
        <img src={props.imageUrl} alt="houseImage" />
    </div>
);

export default House;