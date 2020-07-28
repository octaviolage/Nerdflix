import React from 'react'

function ButtonLink(props) {
    // props -> { className e href são parametros}

    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;