import React from 'react'
import Filho from './Filho'

export default props => {
    /* Aqui o pai esta informando ao filho que o mesmo pode sair, pegando o nome do lugar que o mesmo passou por parametro */
    const notificarSaidaDoFilho = lugar => alert(`Liberado para ${lugar}`)
    return(
       <div>
            {/* notificarSaida esta sendo usada no filho. No momento que no filho é clicado no botão, 
            a constante notificarSaidaDoFilho é chamada, fazendo a chamada do metodo alert e usando o lugar passado na propriedade*/}
            <Filho notificarSaida={notificarSaidaDoFilho}/>
        </div>
    )
}