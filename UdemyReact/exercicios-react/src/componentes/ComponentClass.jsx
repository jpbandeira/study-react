import React , {Component} from 'react'

/* 
-- Componentes funcionais, que são criados sem utilização de classes, não possuem estado,
dessa forma é melhor criar os mesmo usando funções ou constantes 

-- Já componentes que devem ter um estado, devem ser criados como classe
*/

//Componente de classe
export default class ComponentClass extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.valor1}</h1>
                {/* Se na minha propriedade não vier nenhum valor, é jogado o segundo valor da condição */}
                <h1>{this.props.valor2 || "Padrão"}</h1>
            </div>
        )
    }
}