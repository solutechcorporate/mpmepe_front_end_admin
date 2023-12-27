import React from "react";
import AppBody from "../../components/AppBody";
import Input from "../../components/InputForm";


const AddContact = () => {
    return ( 
        <AppBody>
            {/* <div className="page-body"> */}
            <div className="row" style={{ margin : 8}}>
                <div className="col-6">
            
                {/* <!-- Basic Form Inputs card start --> */}
                <div className="card d-flex" style={{ alignItems: "start",}}>
               
                        <h3 style={{ margin: 8}}>Formulaire copyright</h3>
            <div className="card-body " style={{ alignContent: "start",}}>
                            
                <form className="px-3" >

                    <div className="form-group row">
                    <div className="row mt-3">
                    <label>Nom et Prenom </label>
                        <div className="col">
                        
                        <input
                            type="text"
                            name="code"
                            className="form-control"
                            required
                        />
                        </div>
                        </div>
                        <div className="row mt-3">
                        <label>Email</label>
                            <div className="col">
                                
                                <input
                                    type="texte"
                                    name="designation"
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                        <label>Phone</label>
                            <div className="col">
                                
                                <input
                                    type="tel"
                                    name="designation"
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                        <label>Objet</label>
                            <div className="col">
                                
                                <input
                                    type="texte"
                                    name="designation"
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                        <label>Message</label>
                            <div className="col">
                                
                                <textarea name="message" rows={6} cols={40}></textarea>
                            </div>
                        </div>
                        </div>
                       
                    <div className="row" style={{ margin : 8}}>
                    <div className="col">
                        <button type="submit" className="btn btn-primary">
                        Enregistrer
                        </button>
                    </div>
                    </div>
            </form>
                                        {/* <!-- Page body end --> */}
            </div> 
        </div> 
    </div> 
</div> 
                                    
                       

        </AppBody>
     );
}
 
export default AddContact;