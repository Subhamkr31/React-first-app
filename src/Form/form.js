
import React, { useState } from 'react'


import './form.css'

const Form = () => {

    const [data, setData] = useState()
    const [showResult, setShowResult] = useState(false);

    const handleDelete = () => {
        console.log('hello');
        setShowResult(false)
        setData('')
    }

    return (
        
        <div className="container">
            <h2>Please Fill this form</h2>
            <form onSubmit={(event) => {
                console.log("hello submit");
                event.stopPropagation();
                event.preventDefault();
                setShowResult(true)
            }}>
                <label htmlFor="first-name">
                    <input placeholder='Fill here' type="text" name='first-name' value={data} onChange={(event) => {
                        console.log(event.target);
                        setData(event.target.value)
                    }} />

                </label>

                <button id = 'a' type="submit" > <strong> Click me</strong> </button>
            </form>
            <div>
                <button id = 'b' type="submit" onClick={() => handleDelete()}> <strong> Reset</strong> </button>
                {showResult &&
                    (<h3>Your data -- <strong>{data.toUpperCase()}</strong></h3>)
                }
            </div>
        </div>


    )
}


export default Form