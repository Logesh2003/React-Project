import React from 'react';

const InputField = ({ type, name, placeholder, value, onChange, error }) => {
    return (
        <div className='mb-3'>
            <input
                type={type}
                name={name}
                className={`form-control ${error ? 'is-invalid' : ''}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <div className='invalid-feedback'>{error}</div>}
        </div>
    );
};

export default InputField;
