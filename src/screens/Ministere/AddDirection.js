import React from "react";
import AppBody from "../../components/AppBody";
import Input from "../../components/InputForm";


const AddDirection = () => {
    return ( 
        <AppBody>
            {/* <div className="page-body"> */}
            <div className="row" style={{ margin : 8}}>
                <div className="col-6">
            
                {/* <!-- Basic Form Inputs card start --> */}
                <div className="card d-flex" style={{ alignItems: "start",}}>
               
                        <h3 style={{ margin: 8}}>Ajout Direction</h3>
                        <div className="card-body " style={{ alignItems: "center",}}>
                            
                <form className="px-3" >

                <div className="row mt-3">
                     <label>Photo </label>
                    <div className="col">
                        
                        <input
                            type="file"
                            name="code"
                            className="form-control"
                            required
                        />
                    </div>
                </div>

                    <div className="form-group row">
                    <div className="row mt-3">
                    <label>Libelle </label>
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
                        <label>Sigle</label>
                            <div className="col">
                                
                                <input
                                    type="text"
                                    name="designation"
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                        <label>Numero de telephone</label>
                            <div className="col">
                                
                                <input
                                    type="number"
                                    name="designation"
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className="row mt-3">
                        <label>Email</label>
                            <div className="col">
                                
                                <input
                                    type="email"
                                    name="designation"
                                    className="form-control"
                                    required
                                />
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
 
export default AddDirection;