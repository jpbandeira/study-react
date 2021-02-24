import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

function calcFatorial(value) {
    if (value < 0) return -1;
    if (value == 0) return 1;
    return calcFatorial(value - 1) * value;
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [status, setStatus] = useState('Ímpar');

    useEffect(function () {
        setFatorial(calcFatorial(number));
        setStatus(number % 2 == 0 ? 'Par' : 'Ímpar');
    }, [number]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title='Exercicio 1' />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="red text">{fatorial}</span>
                </div>
                <input type="number" className="input"
                    value={number} onChange={event => setNumber(event.target.value)} />
            </div>

            <SectionTitle title='Exercicio 2' />
            <div className="center text">
                {status}
            </div>
        </div>
    )
}

export default UseEffect
