import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps}></input>
        {
            /**
             * Below label is only added if the developer has provided a label for the 
             * input, otherwise the label will be null.
             * The shrink class is only applied if ..., but form-input-label class is 
             * always applied.
             */
            label ? (
                <label 
                    className={`${
                        otherProps.value.length ? 'shrink' : ''
                    } form-input-label`}
                >
                    {label}
                </label>
            ) : null
        }
    </div>
);

export default FormInput;