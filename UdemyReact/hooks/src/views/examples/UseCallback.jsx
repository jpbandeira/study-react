import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './useCallbackButtons';

const UseCallback = (props) => {
    const [count, setCount] = useState(0);

    const increment = useCallback(function(value) {
        setCount(current => current + value);
        /* Se utilizasse a propriedade count como dependencia do callBack, a função continuaria
            sendo criada toda vez que o botão fosse clicado, pois count sempre está mudando,
            mas é preciso que a função seja criada somente uma vez, dessa forma pode ser utilizado
            a função setCount que só é criada uma unica vez e o callBack criará novamente a função
            caso o setCount seja modificado.
        */
    }, [setCount]) 

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text red">
                    {count}
                </span>
                <UseCallbackButtons increment={increment}/>
            </div>
        </div>
    )
}

export default UseCallback
