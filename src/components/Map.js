import React from 'react';
import { Image } from 'react-bootstrap';

const Map = (mapURL) => {
    return(
        <div>
            <Image src={mapURL} alt=''></Image>
        </div>
    );
}

export default Map;