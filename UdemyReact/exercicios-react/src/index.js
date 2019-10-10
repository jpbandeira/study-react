import React from 'react'
import ReactDOM from 'react-dom'
import FirstComponent from '../src/componentes/FirstComponent'
import {ComponentA, ComponentB} from './componentes/SecondComponent'
import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'


const element = document.getElementById('root')

ReactDOM.render(<div>

{/*     <FirstComponent valor = "Hello, I'm First Component"/>

<h1>***********************************************************************</h1>

    <ComponentA valor="Hello, I'm component A"/>
    <ComponentB valor="Hello, I'm component B"/> 
    
<h1>***********************************************************************</h1>

    <FamiliaSilva sobrenome = " Silva"/>

<h1>***********************************************************************</h1> */}

     <Familia sobrenome=" Bandeira de Lima"> 
        <Membro nome = "João Pedro" />
        <Membro nome = "Luiza" /> 
    </Familia>

</div>, element)