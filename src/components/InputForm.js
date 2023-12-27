import React, { useEffect, useRef, useState } from 'react';
import {Icon} from 'react-icons-kit';
const Input = ({errors,password , conf, handleToggle,icon, isValid,  lenght, label, required, ...props}) => {
    const [isInputActive, setIsInputActive] = useState(false);
    const inputRef = useRef(null);

    const inputStyle = {
        // borderColor: isValid && '#0023FF',
        backgroundColor: "#eee",
        border: 'none',
        // padding: "12px 15px",
        // margin: "8px 0",
        // width: "100%",
        borderRadius: "5px"
    }

    const inputStylePassword = {
            borderRight: "0px",
            backgroundColor: "#eee",
            border: 'none',
        // marginTop: "8px 0",
        // width: "100%",
        borderRadius: "5px"
       

    }

    const handleInputFocus = () => {
    setIsInputActive(true);
  };

  const handleInputBlur = () => {
    setIsInputActive(false);
  };

  

    return ( 
        <div className="" >
            {label && <label className="form-label text-color-dark text-3">{label}{required && <span className="text-color-danger">*</span>}</label>}
            {!password  && <input style={inputStyle} className="form-control form-control-lg text-4" {...props} required={required} />}
            {password && <div class="input-group mb-3" style={{ paddingRight: "0px"}}>
            <input style={inputStylePassword} onBlur={handleInputBlur} onFocus={handleInputFocus} className="form-control form-control-lg text-4" {...props} required={required} />
            <span className="input-group-text" onClick={handleToggle} 
            style={{
                    borderColor: '#ccc',
                    background: "#eee",
                    border: "0px",
                    marginTop: 8
                }}>
                <Icon className="absolute mr-15" icon={icon} size={25}
                style={{
                    color: '#ccc'
                }} />
            </span>
            </div>}
            {!conf && password && isInputActive && !isValid && lenght >= 2  && <span className="text-danger" style={{ fontSize: 15, fontWeight: 500, fontFamily: 'Poppins', margin: 5 }}>
                
                Le mot de passe doit contenir au moins huit(8) caracteres un Majuscule, un Chiffre et un symbol non alphaNumerique
                {/* {conf && password && isInputActive && !isValid && lenght >= 2 && isInputActive && "les champs password et confirmation de mot de passe doivent etre identiques"} */}
            </span>}
            {conf && password && isInputActive && !isValid && lenght >= 2  && <span className="text-danger" style={{ fontSize: 15, fontWeight: 500, fontFamily: 'Poppins', margin: 5 }}>
                
               les champs password et confirmation de mot de passe doivent etre identiques
            </span>}
            {errors && <span className="text-danger" style={{ fontSize: 15, fontWeight: 500, fontFamily: 'Poppins', margin: 5 }}>
                {errors.name}
                {password && isInputActive && !isValid && lenght >= 2 && "Le mot de passe doit contenir au moins huit(8) caracteres un Majuscule, un Chiffre et un symbol non alphaNumerique"}
                {conf && password && isInputActive && !isValid && lenght >= 2 && isInputActive && "les champs password et confirmation de mot de passe doivent etre identiques"}
            </span>}
        </div>
     );
};
 
export default Input;