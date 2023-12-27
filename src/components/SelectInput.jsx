/* eslint-disable no-undef */
import React, {useState} from 'react';

const SelectInput = ({label, data,value,libelle, error, ...props}) => {

  const [isFocused, setIsFocused] = useState(false)
    const handleFocus = () => {
        setIsFocused(true)
    }
  const inputStyle = {
    border: '0.5px solid #939496',
    padding: '5px',
    borderColor: isFocused ? '#055ffa' : '#939496',
    height: '40px',
    fontSize: '14px',
    color: '#040405',
    borderRadius: '6px',
}
  return (
    <div className="mb-3">
      <label className="form-label" style={{ color: 'black', fontSize: 16,  }}>{label}</label>
      <select 
      className="form-control select2" 
      value={value} 
      style={inputStyle} 
      onFocus={handleFocus}
      onBlur={() => setIsFocused(false)}
      {...props}>
        <option value="">{label}...</option>
        {data.map((row) =>  
            <option key={row.id} value={libelle ? row.libelle : row.id}>{row.libelle ? row.libelle : (row.nom ? row.nom : row.name)}</option>)}
      </select>
      {error && <span style={{ color: 'red', fontSize: 16, marginTop: 18 }}>{error}</span>}
    </div>
  );
};

export default SelectInput;
