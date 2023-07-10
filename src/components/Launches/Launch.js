import React from 'react';

const Launch = ({launch}) => {
    const {flight_number,mission_name,launch_year,links:{mission_patch_small} } = launch;
    return (
        <div>
            <div className={'launchDiv'}>
                <h1>
                {flight_number} {mission_name} {launch_year}
                </h1>
                <img src={mission_patch_small} alt=""/>
            </div>
        </div>
    );
};

export default Launch;