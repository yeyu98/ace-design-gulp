import React from 'react';
import './Button.less'

export interface ButtonProps {
    onClick: any;
    Children: React.ReactNode
}

function Button(props: ButtonProps) {
    const {Children} = props
    return (
        <button onClick={props?.onClick}>
            {Children}
        </button>
    );
}

export default Button;