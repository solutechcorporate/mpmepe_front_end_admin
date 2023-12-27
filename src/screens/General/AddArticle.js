import React from "react";
import AppBody from "../../components/AppBody";
import Input from "../../components/InputForm";


const AddArticle = () => {
    return ( 
        <AppBody>
            {/* <div className="page-body"> */}
        
            
                {/* <!-- Basic Form Inputs card start --> */}
                <div className="card d-flex" style={{ alignItems: "start",}}>
                <div className="row" style={{ margin : 8}}>
                <div className="col-6">
                        <h3 style={{ margin: 8}}>Ajout Article</h3>
                        <div className="card-body text-left" style={{ alignContent: "start",}}>
                            
                <form className="px-3" >
                    <div className="form-group row">
                    <div className="row mt-3">
                    <label>Titre </label>
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
                        <label>Date Event</label>
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
                        <label>Categorie</label>
                            <div className="col">
                            <select
                                multiple
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
                        
                    </div>

                   
          </form>
                                        {/* <!-- Page body end --> */}
                                    
                                {/* <!-- Main-body end --> */}
                            
                    </div>
                    </div>
                    <div className="col-6" style={{ marginTop: 60}}>
                    <div className="row mt-3">
                    <label>Image de reference </label>
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
                </div>

                <div className="row" style={{ margin : 8}}>
                <div className="row mt-3">
                    <label>Contenu </label>
                    <div className="col-12" >
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
                </div>


        </AppBody>
     );
}
 
export default AddArticle;