import React from 'react';
import PropTypes from 'prop-types';
import './Template.module.css';

export const Template = ({ bold }) => {
    if (bold) {
        return <div className="base bolded"><strong>This is a Template</strong></div>
    }
    return <div className="base">This is a Template</div>
};

Template.propTypes = {
  bold: PropTypes.bool,
}

Template.defaultProps = {
    bold: false,
}
