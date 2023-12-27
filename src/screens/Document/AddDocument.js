import React from "react";
import AppBody from "../../components/AppBody";
import Input from "../../components/InputForm";


const AddDocument = () => {
    return ( 
        <AppBody>
            {/* <div className="page-body"> */}
            <div className="row" style={{ margin : 8}}>
                <div className="col-6">
            
                {/* <!-- Basic Form Inputs card start --> */}
                <div className="card d-flex" style={{ alignItems: "start",}}>
               
                        <h3 style={{ margin: 8}}>Ajout d'Ajout Document</h3>
                        <div className="card-body " style={{ alignContent: "start",}}>
                            
                <form className="px-3 mon-form" >
                    <div className="form-group row">
                    <div className="row mt-3">
                    <label >Titre </label>
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
                        <label>Date Publication</label>
                            <div className="col">
                                <input
                                    type="date"
                                    name="designation"
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row mt-3">
                        <label>Categorie Document</label>
                            <div className="col">
                            <select
                                name="etudiant_user_id"
                                className="form-control"
                                required
                            >
                            <option value="">Categorie 1</option>
                            <option value="">Categorie 2</option>
                            <option value="">Categorie 3</option>
                            
                            </select>
                            </div>
                         </div>

                         <div className="row mt-3">
                        <label>Document path </label>
                        <div className="col">
                        <input
                            type="file"
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
 
export default AddDocument;