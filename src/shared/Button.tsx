import React from 'react';

import './Button.css'

interface ButtonProps {
    type: 'submit' | 'reset' | 'button' | undefined;
    text: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ type, text, onClick }: ButtonProps) => {
    return (
        <button className="button" type={type} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;