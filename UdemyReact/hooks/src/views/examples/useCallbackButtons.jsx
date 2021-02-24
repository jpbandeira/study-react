import React from 'react'

const UseCallbackButtons = (props) => {
    console.log('teste...');
    return (
        <div>
            <button className="btn" onClick={() => props.increment(6)}>+6</button>
            <button className="btn" onClick={() => props.increment(12)}>+12</button>
            <button className="btn" onClick={() => props.increment(18)}>+18</button>
        </div>
    )
}

/*
    Ao utilizar o useMemo, este componente será armazenado em memoria e será renderizado novamente
    somente se as propriedades passadas para ele sejam diferentes da anterior.
*/
export default React.memo(UseCallbackButtons);
