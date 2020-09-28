import React from 'react';

import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
} from './form-input.styles';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...otherProps}></FormInputContainer>
        {
            /**
             * Below label is only added if the developer has provided a label for the 
             * input, otherwise the label will be null.
             * The shrink class is only applied if ..., but form-input-label class is 
             * always applied.
             */
            label ? (
                <FormInputLabel 
                    className={`${
                        otherProps.value.length ? 'shrink' : ''
                    } form-input-label`}
                >
                    {label}
                </FormInputLabel>
            ) : null
        }
    </GroupContainer>
);

export default FormInput;