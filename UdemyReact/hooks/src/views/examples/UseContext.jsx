import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/DataContext'

const UseContext = (props) => {
    const { stateContext, setStateContext } = useContext(DataContext);

    function addNumber(value) {
        setStateContext({
            ...stateContext,
            number: parseInt(stateContext.number) + value
        })
    }

    function changeText(value) {
        setStateContext({
            ...stateContext,
            text: value
        })
    }

    function updateState(key, value) {
        setStateContext({
            ...stateContext,
            [key]: value
        })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <div className="center">
                <span className="text">
                    {stateContext.text}
                </span>
                <span className="text">
                    {stateContext.number}
                </span>
                <input type="text" className="input" value={stateContext.text} onChange={e => changeText(e.target.value)} />
                <input type="text" className="input" value={stateContext.text} onChange={e => updateState('text', e.target.value)} />
                <input type="number" className="input" value={stateContext.number} onChange={e => updateState('number', e.target.value)} />
                <div>
                    <button className="btn"
                        value={stateContext.number} onClick={() => addNumber(1)}>
                        +1
                </button>
                    <button className="btn"
                        value={stateContext.number} onClick={() => addNumber(-1)}>
                        -1
                </button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
