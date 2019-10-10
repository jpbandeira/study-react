import React from 'react'

const ComponentA = props => (
    <h1>Primeiro diz: {props.valor}</h1>
)

const ComponentB = props => (
    <h1>Segundo diz: {props.valor}</h1>
)

export {ComponentA, ComponentB}