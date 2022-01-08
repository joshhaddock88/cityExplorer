import React, { Component } from 'react';

const DisplayInfo = ({locationObject}) => {
    return(
        <div>
            <p>Longitude: {locationObject.lon}</p>
            <p>Latitude: {locationObject.lat}</p>
        </div>
    );
}

export default DisplayInfo;