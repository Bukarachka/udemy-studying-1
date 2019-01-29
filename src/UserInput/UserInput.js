import React from 'react';

const userInput = (props) => {
    return(
        <div className="UserInput">
            <input value={props.currentInput} onChange={props.onChange}/>
        </div>
    );
};

export default userInput
