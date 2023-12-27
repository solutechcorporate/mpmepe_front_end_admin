import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Layout from './layout';
import Footer from './Footer';

const AppBody = ({ children }) => {
    return (
      <>
          {/* <!-- Pre-loader start --> */}
      <div className="theme-loader">
      <div className="loader-track">
          <div className="loader-bar"></div>
      </div>
      </div>
    {/* <!-- Pre-loader end --> */}
    <div id="pcoded" className="pcoded">
        <div className="pcoded-overlay-box"></div>
        <div className="pcoded-container navbar-wrapper">
          <Header auth={false} />
          <div className="pcoded-main-container">
              <div className="pcoded-wrapper">
              <SideBar/>
                <div className="pcoded-content">
                  <div className="pcoded-inner-content">
                      <div className="main-body">
                      {children}
                      <Footer/>
                      </div>
                  </div>
                  
                </div>
                
              </div>
              
          </div>
        </div>
      </div>
    </>
    );
}
 
export default AppBody;