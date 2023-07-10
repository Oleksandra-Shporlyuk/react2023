import React from 'react';

const RickAndMorty = ({name,status,species,gender,image}) => {
    return (
        <div>
            <div className={'RandMDiv'}>
                <h1>{name}</h1>
                <h2>{status} {species}</h2>
                <h2>{gender}</h2>
                <img src={image} alt=""/>
            </div>
        </div>
    );
};

export default RickAndMorty;