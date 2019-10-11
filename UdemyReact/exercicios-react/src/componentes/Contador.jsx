import React , {Component} from 'react'

export default class Contador extends Component{

    /* 
    Tudo aquilo que é recebido via props(propriedade) não pode ser mudado
    props é read only
    */

    //Pouco utilizado, muito codigo
/*     constructor(props){
        super(props)
        this.maisUm = this.maisUm.bind(this)
    } */

    //Estado de um propriedade do componente
    state = {
        numero: this.props.numero
    }

    maisUm = () =>{
        //Por padrão, o this não chama a Classe atual
        //Maneira de mudar o estado de um propriedade do componente
        this.setState({numero: this.state.numero+1})
    }

    menosUm = () =>{
        this.setState({numero: this.state.numero-1})
    }

    alterarValor = (valor) =>{
        this.setState({numero: this.state.numero + valor})
    }
    
    render(){
        return(
            <div>
                <div>
                    <h2>Numero: {this.state.numero}</h2>
                </div>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={this.maisUm}>Inc</button>

                <button onClick={() => this.alterarValor(-10*9999)}>Dec 10</button>
                <button onClick={() => this.alterarValor(10*9999)}>Inc 10</button>
            </div>
        )   
    }
}