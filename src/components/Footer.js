import React from 'react';

const Footer = () => {
    return (
      <>
      
      <footer className="footer">
      <div className="row drap" style={{ bottom: "30px", left: 0}}>
            <div className="col-sm-4 h-80" style={{ background: "#027227"}}>

            </div>
            <div className="col-sm-4 bg-warning">

            </div>
            <div className="col-sm-4 bg-danger">

            </div>
          </div>
        <div className="container-fluid">
        
          <div className="row text-footer">
            <div className="col-sm-12 text-center">
              <script>document.write(new Date().getFullYear())</script> © MINISTÈRE DES PETITES ET MOYENNES ENTREPRISES ET DE LA PROMOTION DE L’EMPLOI.
            </div>
            
          </div>
          
        </div>
        
      </footer>
      </>
    );
}
 
export default Footer;