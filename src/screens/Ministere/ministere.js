import React from "react";
import AppBody from "../../components/AppBody";
import Input from "../../components/InputForm";
import TableView from "../../components/TableView";
import Filter from "../../components/Filter";
import { useNavigate } from "react-router-dom";


const Ministere = () => {
    const columns = [
        "Nom",
        "Email",
        "Phone",
        "Adresse",
      ];
      const navigate = useNavigate();

      const handleRedirect = () => {
        navigate("/add_ministere")
      }
  
    return ( 
        <AppBody>
            <div className="row">
                <div className="col-xl-13 col-sm-12">
                    <div className="card text-center">
                        <div className="card-body">
                            <div className="mb-4">
                                <img className="rounded-circle avatar-sm" src="/assets/images/avatar-4.jpg" alt="" />
                            </div>
                            <h5 className="font-size-15 mb-1"><a href="javascript: void(0);" className="text-dark">Colin Melton</a>  </h5>
                            <p className="text-muted">Backend Developer</p>

                            {/* <div style={{ fontSize: "90px", fontStretch: "extra-condensed",padding: 40, lineHeight: 2 }} className="card text-center font-size-40">
                            <p className="text-muted font-size-30"><strong style={{ fontWeight: "bold", color: "black"}}>Email: &nbsp;&nbsp;  </strong>jjsjsj</p>
                            <p className="text-muted font-size-30"><strong style={{ fontWeight: "bold", color: "black"}}>Telephone:  &nbsp;&nbsp; </strong>jjsjsj</p>
                            <p className="text-muted font-size-30"><strong style={{ fontWeight: "bold", color: "black"}}>Adresse:  &nbsp;&nbsp; </strong>jjsjsj</p>
                            <p className="text-muted font-size-30"><strong style={{ fontWeight: "bold", color: "black"}}>Longitude:   &nbsp;&nbsp;</strong>jjsjsj</p>
                            <p className="text-muted font-size-30"><strong style={{ fontWeight: "bold", color: "black"}}>Latitude:  &nbsp;&nbsp;</strong>jjsjsj</p>
                            <p className="text-muted font-size-30"><strong style={{ fontWeight: "bold", color: "black"}}>Adresse:  &nbsp;&nbsp;</strong>jjsjsj</p>
                           
                                
                            </div> */}
                            <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">
        
                                        <div class="table-responsive">
                                            <table class="table table-striped table-nowrap mb-0">
                                                
                                                <tbody>
                                                <tr>
                                                    <td>Email:</td>
                                                    <td>
                                                        <a href="javascript: void(0);" id="inline-username" data-type="text" data-pk="1" data-title="Enter username">superuser</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Telephone</td>
                                                    <td>
                                                        <a href="javascript: void(0);" id="inline-firstname" data-type="text" data-pk="1" data-placement="right" data-placeholder="Required" data-title="Enter your firstname"></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Adresse</td>
                                                    <td>
                                                        <a href="javascript: void(0);" id="inline-sex" data-type="select" data-pk="1" data-value="" data-title="Select sex"></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Longitude</td>
                                                    <td>
                                                        <a href="javascript: void(0);" id="inline-dob" data-type="combodate" data-value="2015-09-24" data-format="YYYY-MM-DD" data-viewformat="DD/MM/YYYY" data-template="D / MMM / YYYY" data-pk="1"  data-title="Select Date of birth"></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Latitude</td>
                                                    <td>
                                                        <a href="javascript: void(0);" id="inline-comments" data-type="textarea" data-pk="1" data-placeholder="Your comments here..." data-title="Enter comments">awesome user!</a>
                                                    </td>
                                                </tr>
            
                                                </tbody>
                                            </table>
                                        </div>
                                        
        
                                    </div>
                                </div>
                            </div> 
                        </div>
                        </div>
                        <div className="card-footer bg-transparent border-top">
                            <div className="contact-links d-flex font-size-20">
                                <div className="row text-center" style={{ margin : 8}}>
                                    <div className="col">
                                        <button type="submit" className="btn-block btn-primary" onClick={() => handleRedirect()}>
                                        Mettre à jour
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppBody>
     );
}
 
export default Ministere;