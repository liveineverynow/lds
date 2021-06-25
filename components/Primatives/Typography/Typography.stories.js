import React, { useEffect, useState, useRef } from 'react';
import { TextSizes } from './TextSize'

export default {
    title: 'Primatives/Typography',
    component: TextSizes,
    argTypes: {
        ratio: {
            control: {
                type: "range",
                min: 1.1,
                max: 1.7,
                step: 0.01,
            },
            defaultValue: null,
        }
    }
};
/*
export const TS = ({ ratio }) => {

    document.documentElement.style.setProperty('--ratio', ratio);

    return <TextSizes />
}
*/
