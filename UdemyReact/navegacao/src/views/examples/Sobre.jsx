import React from 'react'
import { useParams } from 'react-router-dom';


const Sobre = props => {
    const {param} = useParams();

    return (        
        <div className='sobre'>
            <h1>Sobre</h1>
            <p>Sobre!... {param}</p>
        </div>
    )
}

export default Sobre;