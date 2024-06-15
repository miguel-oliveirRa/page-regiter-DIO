import React from 'react';
import { InputContainer, IconContainer, InputText } from './styles';

const Input = ({ lefticon, ...rest }) => {
    return (
        <InputContainer>
            { lefticon ? <IconContainer> { lefticon } </IconContainer> : null }
            <InputText { ...rest } />
        </InputContainer>
    );
}

export default Input;