import React from "react";
import AppBody from "../../components/AppBody";
import Input from "../../components/InputForm";


const AddDirigeant = () => {
    return ( 
        <AppBody>
            {/* <div className="page-body"> */}
            <div className="row" style={{ margin : 8}}>
                <div className="col-6">
            
                {/* <!-- Basic Form Inputs card start --> */}
                <div className="card d-flex" style={{ alignItems: "start",}}>
               
                        <h3 style={{ margin: 8}}>Ajout Dirigeants</h3>
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
                        <label>Date de fonction</label>
                            <div className="col">
                                
                                <input
                                    type="date"
                                    name="designation"
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className="row mt-3">
                        <label>Fin de fonction</label>
                            <div className="col">
                                
                                <input
                                    type="date"
                                    name="designation"
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>

                        <div className="row mt-3">
                        <label>Intitule</label>
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
                        <label>Lien decret</label>
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
                        <label>Biographie</label>
                            <div className="col">
                                
                            <textarea className="form-control" id="comment" name="comment" rows={8} cols={50}></textarea>
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
 
export default AddDirigeant;