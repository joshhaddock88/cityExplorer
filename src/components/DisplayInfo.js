import React, { Component } from 'react';

const DisplayInfo = ({locationObject}) => {
    return(
        <p>{locationObject.name}</p>
    );
}

export default DisplayInfo;