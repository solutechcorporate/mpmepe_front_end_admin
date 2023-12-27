import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Layout from './layout';
import Footer from './Footer';

const AppBodyAuth = ({ children }) => {
    return (
      <>
        
    <div id="pcoded" className="pcoded" style={{ marginBottom:120, overflowY: "auto"}}>
        <div className="pcoded-overlay-box"></div>
        <div className="pcoded-container navbar-wrapper">
          <Header auth={true}/>
         <div className="main-body">
            {children}
            
          </div>
            
          
        </div>
          
      </div>
      <Footer/>
    </>
    );
}
 
export default AppBodyAuth;