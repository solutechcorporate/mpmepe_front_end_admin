import React from "react";
import AppBody from "../../components/AppBody";
import Input from "../../components/InputForm";
import TableView from "../../components/TableView";
import Filter from "../../components/Filter"


const Direction = () => {

    const columns = [
        "Libelle",
        "Email",
        "Sigle",
        "Phone",
      ];
  
    return ( 
        <AppBody>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body table-responsive">
                            <h4 className="card-title">Liste des directions</h4>
                            <Filter
                            path="/add_direction" 
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
 
export default Direction;