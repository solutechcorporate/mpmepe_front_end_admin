import { useState } from "react";
import AppBody from "../components/AppBody";
import AppBodyAuth from "../components/AppBodyAuth";
import Footer from "../components/Footer";
import Input from "../components/InputForm";
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import "../App.css"

const Login = () => {

    const [data, setData] = useState({
		email: "",		
		password: "",
		password_confirmation: ""
		})
		const [icon, setIcon] = useState(eyeOff);
        const [visible, setVisible] = useState(false);
        const [isValidPassword, setIsValidPassword] = useState(false)
	const [isValidPasswordConf, setIsValidPasswordConf] = useState(false)

        const handleToggle = () => {
			if (!visible){
				setVisible(true)
			   setIcon(eye);
			} else {
				setVisible(false)
			   setIcon(eyeOff);
			}
		 }
const handleInput = (e) => {
			const { name, value } = e.target;

			// Votre logique de validation ici, par exemple, vérifier la longueur minimale
				// if (value.length < 5) {
				// setIsValid(false);
				// } else {
				// setIsValid(true);
				// }

			// Validation du mot de passe
			if (name === 'password' && value.length > 8) {
			const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
			const isValidPassword = regex.test(value);
			console.log(isValidPassword)
			setIsValidPassword(isValidPassword);
				// if (isValidPassword) {
				// 	inputRef.current.isValid = true;
				// 	// Faites quelque chose avec la valeur de isValid dans le composant parent
				// 	console.log('isValid dans le composant parent:', inputRef.current.isValid);
				// }
			} 
			if(name === 'password_confirmation') {
				const isPasswordConfirmed = value === data.password;

				setIsValidPasswordConf(isPasswordConfirmed);
			}

				// validate(name, value)
			setData((s) => ({
			...s,
			[name]: value,
			}));
		};

    return ( 
        <AppBodyAuth>

    <div className="login p-absolute d-flex " style={{ background: "white", marginBottom:90,}}>
        {/* <!-- Container-fluid starts --> */}
                <div className="container" id="container">
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1 className="text-center">Se connecter</h1>
                    
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                <h1 className="text-center">Se connecter</h1>
                  
                <div className="row">
                    <Input
                        // label="Email" 
                        type="email"
                        lenght={data.email.length} 
                        name="email" 
                        value={data.email} 
                        placeholder="Email"
                        onChange={handleInput} 
                        className="form-control form-control-lg text-4" 
                        required />
                        </div>
                    <div className="row">
                            <Input
                            // label="Mot de Passe" 
                            type={visible ? "text" : "password"}
                            isValid={isValidPassword} 
                            name="password" 
                            placeholder="Mot de Passe"
                            value={data.password} 
                            onChange={handleInput} 
                            lenght={data.password.length}
                            className="form-control form-control-lg text-4"
                            handleToggle={handleToggle}
                            icon={icon} 
                            password
                            required />
                    </div>
                   
                    <div className="row d-flex mb-9 justify-content-between" style={{ marginBottom: 20}}>
                    <div className="col-lg-4 col-md-4" style={{ textAlign: "left", fontSize: 15, whiteSpace: "nowrap", marginRight: 28}}>
                         <label className=" form-check-reverse" >Resté connecté</label>
                    </div>
                    <div className="col-lg-4 col-md-4">

                    </div>
                    <div className="col-lg-4 col-md-4" style={{paddingLeft: 18, right: 0, width: 1, height: 1 }}>
                    <input 
                        type="checkbox" 
                        name="remember" 
                        value="true" 
                        onChange={handleInput} 
                        className="form-check-input" style={{  }} />
                    </div>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <button className="btn-block btn-md" style={{ background: "#0303A8", borderColor:"#0303A8", fontSize: 10}}>Se connecter</button>
                            </div>
                        </div>
                        </div>
                    <p style={{ marginTop: 15}}>Mot de passe oublié.&nbsp;&nbsp;      <a href="#" style={{color: "#027227"}}>Si oui,&nbsp;cliquez ici</a></p>
                    
                </form>
                
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="btn btn-primary" id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                    <img className="img-fluid" src="assets/images/logo3.png" style={{ width: 160, marginBottom : 40, height: 40}} alt="Theme-Logo" />
                        <p>Saisissez vos données personnelles pour avoir acces aux données privileges</p>
                        
                    </div>
                </div>
            </div>
            </div>
        {/* <!-- end of container-fluid --> */}
       
    </div>
    
        </AppBodyAuth>
     );
}
 
export default Login;