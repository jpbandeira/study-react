import React from 'react'

//Comentários de aprendizado
/* 
-- É possivel ter propriedades dentro de componente personalisados.
Essas propriedades são recebidas dentro da fução a partir do parametro props, personalizando como os
paramentro serão utilizados.

-- Dentro de chaves, codigos JS são interpretados
*/

let isLegal = true//Or false

export default (props) => (
     <div>
        <h1>{props.valor}</h1>
        <p>{isLegal ? 'Sim' : 'Não'}</p>
        <p>{Math.random()}</p>
     </div>
)

