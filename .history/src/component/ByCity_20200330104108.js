import React from 'react';

export const ByCity = (props) => (
    <p style={{ margin: 20 }}>name:{props.byCity.name} <em onClick={e => {
        props.getBreweryByType(
            e,
            props.byCity.brewery_type
        );
    }}>brewery_type:{props.byCity.brewery_type}</em> street:{props.byCity.street} city:{props.byCity.city}</p>

)