import React from 'react'
import ReactDOM from 'react-dom'
import FirstComponent from '../src/componentes/FirstComponent'
import {ComponentA, ComponentB} from './componentes/SecondComponent'
import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'
import Pai from './componentes/Pai'
import ComponentClass from './componentes/ComponentClass'
import Contador from './componentes/Contador'


const element = document.getElementById('root')

ReactDOM.render(<div>

{/*     <FirstComponent valor = "Hello, I'm First Component"/>

<h1>***********************************************************************</h1>

    <ComponentA valor="Hello, I'm component A"/>
    <ComponentB valor="Hello, I'm component B"/> 
    
<h1>***********************************************************************</h1>

    <FamiliaSilva sobrenome = " Silva"/>

<h1>***********************************************************************</h1>

{     <Familia sobrenome=" Bandeira de Lima"> 
        <Membro nome = "João Pedro" />
        <Membro nome = "Luiza" /> 
    </Familia>}

<h1>***********************************************************************</h1>

<Pai></Pai> */}

{/* <ComponentClass valor1="Good Morning" valor2="Good Evening"></ComponentClass> */}

<Contador numero={0}></Contador>

</div>, element)