import React from 'react';
import PropTypes from 'prop-types';
import './Title.module.css';

export const Title = ({ children }) => {
    return (
        <h1 className="fs7 fg3">{ children }</h1>
    )
};

Title.propTypes = {
    text: PropTypes.string,
}

Title.defaultProps = {}
