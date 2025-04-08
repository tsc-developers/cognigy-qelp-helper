import React from 'react';

export const RedText = (props) => {
    const text = props.message?.text ?? 'No text';
    return <span style={{ color: 'red' }}>{text}</span>;
};

export const redTextPlugin = {
    match: 'red-text',
    component: RedText
};
