import React from 'react';

import './Hello.css';

const Hello =function({myname}){

    return(
        <div>
            <p className="para1">This is Hello component, this propos value is from app component props:{myname}</p>
        </div>
    );
}

export default Hello;