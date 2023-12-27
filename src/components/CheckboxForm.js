import React, {useState} from 'react';

const CheckboxForm = ({label}) => {
    const [isFocused, setIsFocused] = useState(false)
    
    return ( 
        <div className="form-check form-check-primary mb-3">
            <input className="form-check-input" 
            type="checkbox" 
            id="formCheckcolor1"
            style={{ height: '15px', width: '15px', }}
                />
            <label className="form-check-label" for="formCheckcolor1" style={{ color: 'black', fontSize: 16,  }}>
                {label}
            </label>
        </div>
     );
}
 
export default CheckboxForm;