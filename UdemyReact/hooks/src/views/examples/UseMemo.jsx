import React, { useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function sum(a, b) {
    return parseInt(a) + parseInt(b);
}

const UseMemo = (props) => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);

    const result = useMemo(() => sum(value1, value2), [value1, value2]);

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <div className="center">
                <input type="number" className="input"
                    value={value1} onChange={e => setValue1(e.target.value)} />
                <input type="number" className="input"
                    value={value2} onChange={e => setValue2(e.target.value)} />
                <input type="number" className="input"
                    value={value3} onChange={e => setValue3(e.target.value)} />
            </div>
            <span className="center red">{result}</span>
        </div>
    )
}

export default UseMemo
