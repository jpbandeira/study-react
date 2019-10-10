import React from 'react'

export default props => (
    <idv>
        <button 
            /* Dessa maneira, o fiho esta passando para o pai, a mensagem como parametro da propriedade notificarSaida */
            onClick={() => props.notificarSaida('Shopping Benfica')}>
            Vou sair</button>
    </idv>
)