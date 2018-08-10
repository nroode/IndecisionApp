import React from 'react';

//need to make sure the text gets passed and not the event directly

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            remove
            </button>
    </div>
);

export default Option;