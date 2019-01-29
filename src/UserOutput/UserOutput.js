import React from 'react';

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>
                Some text.
            </p>
            <p>
                {props.userInput}
            </p>
        </div>
    );
};

export default userOutput