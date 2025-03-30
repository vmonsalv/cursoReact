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

    return <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        <button onClick={ handleAdd }>
            +1
        </button>
    </>
}