import React from 'react';

const Simpson = ({name,surname,age,photo}) => {
    return (
        <div>
            <div className={'simpsonDiv'}>
            <h1>{name} {surname}</h1>
            <h4>Age - {age}</h4>
            <img src={photo} alt=""/>
            </div>
        </div>
    );
};

export default Simpson;