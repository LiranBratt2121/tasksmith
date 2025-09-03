import React from 'react'
import { PremetiveProps } from './premetive.types'
import styled from '@emotion/styled'


const TextInput = styled.input`
    display: block;
    padding: 6px 10px;
    border: 2px solid #e5e7eb;
    border-radius: 4px;
    font-size: 14px;
    margin-top: 4px;
`;

const TextLable = styled.label`
    font-size: 14px;
    font-weight: 500;
`;

const TextElement = ({ value, label, onChange, }: PremetiveProps) => {
    return (
        <div style={{ marginBottom: '8px' }}>
            <TextLable>{label}</TextLable>
            <TextInput
                type="text"
                value={value || ''}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}

export default TextElement
