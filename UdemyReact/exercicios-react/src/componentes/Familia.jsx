import React from 'react'
import {filhosComProps} from '../util/Util'

export default props => (
    <div>
       <h1>Familia</h1>

        {/* Criando uma função para deixar padrão o uso de map para renderizar mais de um elemento
        que são passados do filho para pai */}
        {filhosComProps(props)}

        {/* Maneira de passar as propriedades do componente pai para todos os filhos, sem especificar,
        espalhando no novo objeto e recebendo mais de uma com a função "map" que cria um array de elementos para renderizar na tela */}
{/*         {React.Children.map(props.children, child => {
            return React.cloneElement(child, {...props} )
        })} */}

        {/* Maneira de passar elementos do componente pai, mas sem especificar qual esta passando, PARA APENAS UM ELEMENTO. No caso, recebe todos */}
        {/* O elemento "...", chamado de spread, recebe os valores da propriedade, e espalha dentro do novo objeto criado */}
        {/* React.cloneElement(props.children, {...props} ) */}

        {/* NÃO UTILIZADA */}
        {/* Maneira de passar elementos do component pai para componente filho */}
        {/*{React.cloneElement(props.children,
            {sobrenome: props.sobrenome}
            )} */}

       {/* NÃO UTILIZADA */}     
       {/* recebe o elemento vindo diretamento do filho, passado em casa um deles */} 
       {/* props.children */}
    </div>
)