import React from 'react';
import './Street.css';

const Street = (props) => (
    <div variant="street" onMouseEnter={() => props.streetHoverEvent(props.id)}>
        <p variant="street-info">{props.location}</p>
    </div>
);

export default Street;