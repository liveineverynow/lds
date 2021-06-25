import React from 'react';
import PropTypes from 'prop-types';
import './Body.module.css';

export const Body = ({ children }) => {
    return (
        <p className="fg2 bg9 ls2">{ children }</p>
    )
};
