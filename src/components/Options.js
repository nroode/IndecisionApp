import React from 'react';
import Option from './Option';

//setup options prop for options component
//render the length of the array
//could set bind by adding to onclick but takes too long to run each time. Set set override constructor

const Options = (props) => (
    <div>
        <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button
            className="button button--link"
            onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
        
        {props.options.length === 0 && <p className="widget__message"> Please add an option to get started. </p>}
        {
            props.options.map((option, index) => (
                <Option
                    key={option}
                    optionText={option}
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }

    </div>
);

export default Options;