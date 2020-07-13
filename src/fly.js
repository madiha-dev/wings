import React from 'react';

function Fly(props){ 
    //props is an object type argument of this component
    return (
        <div>
            {/* <h1>Fly like a bird</h1> */}
            <p>Fly like a {props.flyQuote}</p>
        </div>
    );
}

export default Fly;