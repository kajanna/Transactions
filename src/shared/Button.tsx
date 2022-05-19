import React from 'react';

import './Button.css'

interface ButtonProps {
    type: 'submit' | 'reset' | 'button' | undefined;
    text: string
}

const Button = ({ type, text }: ButtonProps) => {
    return (
        <button className="button" type={type}>
            {text}
        </button>
    );
};

export default Button;