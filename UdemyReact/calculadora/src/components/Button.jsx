import React from 'react'
import './css/Button.css'

export default props => (
        <button className={`
            button
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}    
        `}
        onClick={e => props.click(props.label)}
        >
                {props.label}
        </button>
)