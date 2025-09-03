import React from 'react'
import { PremetiveProps } from './premetive.types'
import styled from '@emotion/styled'

const RadioHeader = styled.label`
    font-size: 14px;
    font-weight: 500;
    display: block;
    margin-bottom: 6px 
`

const InputLabel = styled.label`
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
`


const RadioElement = ({ label, onChange, value, options }: PremetiveProps) => {
    return (
        <div style={{ marginBottom: '8px' }}>
            <RadioHeader>
                {label}
            </RadioHeader>
            {options?.map((option, i) => (
                <div key={i} style={{ marginBottom: '4px' }}>
                    <InputLabel>
                        <input
                            type="radio"
                            name={label}
                            value={option}
                            checked={value === option}
                            onChange={(e) => onChange(e.target.value)}
                            style={{ marginRight: '6px' }}
                        />
                        {option}
                    </InputLabel>
                </div>
            ))}
        </div>
    )
}

export default RadioElement;
