import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextArea = ({label, val, handleChange}) => {
    const [isFocused, setIsFocused] = useState(false)
    const handleFocus = () => {
        setIsFocused(true)
    }
  const inputStyle = {
    border: '2px solid #474747',
    padding: '5px',
    borderColor: isFocused ? '#055ffa' : '#474747',
    height: '50px',
    fontSize: '14px',
    color: '#040405'
}
    return (
        <div className="mb-3">
            <label style={{ color: 'black', fontSize: 16,  }}>{label}</label>
            <ReactQuill theme="snow"
            
            value={val} 
            onChange={handleChange} />
        </div> 
     );
}
 
export default TextArea;