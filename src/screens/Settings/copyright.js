import React from "react";
import AppBody from "../../components/AppBody";
import Input from "../../components/InputForm";
import Filter from "../../components/Filter";
import TableView from "../../components/TableView";


const Cpoyright = () => {
    const columns = [
        "Texte",
        "mention",
      ];
  
    return ( 
        <AppBody>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body table-responsive">
                            <h4 className="card-title">Liste des copyright</h4>
                            <Filter
                            path="/add_copy" 
                            />
                                <TableView columns={columns}>

                                </TableView>
                        </div>
                    </div>
                </div>
            </div>
        </AppBody>
     );
}
 
export default Cpoyright;