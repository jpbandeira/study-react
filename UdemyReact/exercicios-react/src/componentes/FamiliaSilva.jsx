import React from 'react'
import Membro from './Membro'

export default props => (
    <div>
        
        <h4>Membro 1</h4>
        <Membro 
        nome="João Pedro" 
        //Maneira buscar as propriedades passadas pelo PAI. Que nesse caso é Familia Silva
        sobrenome={props.sobrenome} />

        <h4>Membro 2</h4>
        <Membro 
        nome="João" 
        sobrenome={props.sobrenome + " Pereira"} />
    </div>
)