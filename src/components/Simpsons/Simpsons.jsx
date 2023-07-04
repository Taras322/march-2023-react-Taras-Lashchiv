import React from 'react';

const Simpsons = ({info}) => {
    return (
        <div>
            <h2>{info.name} {info.surname}</h2>
            <h3>Age - {info.age}</h3>
            <img src={info.photo} alt=''/>
            <p>{info.info}</p>
        </div>
    );
};

export default Simpsons;