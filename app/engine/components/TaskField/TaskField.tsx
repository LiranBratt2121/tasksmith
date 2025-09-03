import React from 'react';
import { TaskFieldProps } from './taskField.types';
import TextElement from '../premetives/TextElement';
import RadioElement from '../premetives/RadioElement';

export const TaskField = ({ type, label, value, options, onChange }: TaskFieldProps) => {
    switch (type) {
        case 'text':
            return <TextElement label={label} onChange={onChange} value={value} options={options} />
        case 'radio':
            return <RadioElement label={label} onChange={onChange} value={value} options={options} />
        default:
            return null;
    }
};
