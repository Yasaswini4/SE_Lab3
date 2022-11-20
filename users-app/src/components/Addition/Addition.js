import React, { useState } from 'react';
import './Addition.css';
const Addition = () => {
    const [result, setResult] = useState(null);
    const handleAdd = e => {
        e.preventDefault();
        const firstNumber = e.target.firstNumber.value;
        const secondNumber = e.target.secondNumber.value;
        const data = {
            firstNumber,
            secondNumber
        }
        fetch('http://localhost:3005/api/v1/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => setResult(data))
        e.target.reset();
    }
    console.log(result);
    return (
        <div>
            <div className="container">
                <div className="update-information">

                    <form onSubmit={handleAdd} className='update-card'>
                        <h3 className='text-center mb-3'>Add Two Numbers</h3>
                        <div class="mb-3">
                            <label for="name" class="form-label">First Number</label>
                            <input type="text" class="form-control" id="firstNumber" placeholder="First Number" required/>
                        </div>
                        <div class="mb-3">
                            <label for="name" class="form-label">Second Number</label>
                            <input type="text" class="form-control" id="secondNumber" placeholder="Second Number" required/>
                        </div>
                        <button className='update-btn' type="submit" >Add</button>
                        {
                            result &&
                            <div>
                                <h3 className='text-center result-style'>The result of {parseFloat(result?.data?.firstNumber).toFixed(2)} + {parseFloat(result?.data?.secondNumber).toFixed(2)} = {result?.data?.total}</h3>
                            </div>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Addition;