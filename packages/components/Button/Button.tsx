import React from 'react';
import './Button.less'

export interface ButtonProps {
    onClick: any;
    children: React.ReactNode
}

function Button(props: ButtonProps) {
    const {children} = props
    return (
        <button onClick={props?.onClick}>
            {children}
        </button>
    );
}

export default Button;