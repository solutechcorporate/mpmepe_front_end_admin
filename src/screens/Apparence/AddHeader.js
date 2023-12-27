import React from "react";
import AppBody from "../../components/AppBody";
import Input from "../../components/InputForm";


const AddHeader = () => {
    return ( 
        <AppBody>
            {/* <div className="page-body"> */}
            <div className="row" style={{ margin : 8}}>
                <div className="col-6">
            
                {/* <!-- Basic Form Inputs card start --> */}
                <div className="card d-flex" style={{ alignItems: "start",}}>
               
                        <h3 style={{ margin: 8}}>Ajout Header</h3>
            <div className="card-body " style={{ alignContent: "start",}}>
                            
                <form className="px-3" >

                    <div className="form-group row">
                        <div className="row mt-3">
                            <label>Nom </label>
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
                            <label>Affichage</label>
                            <div className="col">
                                <select
                                    name="etudiant_user_id"
                                    className="form-control"
                                    required
                                >
                                <option value="">Menu Horizontal</option>
                                <option value="">Menu Lateraal</option>
                                <option value="">Pied de page</option>
                                
                                </select>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <label>Position </label>
                            <div className="col">
                            
                                <input
                                    type="integer"
                                    name="code"
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <label>Slog </label>
                            <div className="col">
                            
                                <input
                                    type="text"
                                    name="code"
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
 
export default AddHeader;