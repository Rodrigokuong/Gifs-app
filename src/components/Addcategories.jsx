import React, { useState } from 'react';

export const Addcategories = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <div>
            <form
                onSubmit={handlesubmit}>
                <input
                    type='text'
                    placeholder='Buscar Gifs'
                    value={inputValue}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}
