import { useState } from "react"


export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(value);

    // Esta función va dentro del functional component
    // xq se trabajará con variables que están dentro del functional component
    const handleAdd = () => {
        // console.log('+1')
        setCounter(counter + 1)
        // setCounter((c) => c + 1) -> otra manera de sumar 1
    }

    const handleSubstract = () => {
        if((counter-1) >= 0)
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(0)
    }

    return <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        <button onClick={ handleAdd }>
            +1
        </button>

        <button onClick={ handleSubstract }>
            -1
        </button>
        <button aria-label="btn-reset" onClick={ handleReset }>
            Reset
        </button>
    </>
}