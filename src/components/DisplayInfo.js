import React from 'react';

const DisplayInfo = ({locationObject}) => {
    return(
        <div>
            <h3>City: {locationObject.display_name}</h3>
            <p>Longitude: {locationObject.lon}</p>
            <p>Latitude: {locationObject.lat}</p>
        </div>
    );
}

export default DisplayInfo;