import React from 'react';
import { ButtonContainer } from './styles';

const Button = ({ label, variant="primary" }) => {
    return (
        <ButtonContainer variant={ variant } > 
            { label }
        </ButtonContainer>
    );
}

export default Button;