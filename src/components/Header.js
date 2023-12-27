/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = ({auth}) => {
    return (
        <nav className="navbar header-navbar pcoded-header" style={{
            background: 'linear-gradient(to right, #0303A8, #027227)' // Utilisation d'un dégradé linéaire de rouge à vert
          }}>
        <div className="navbar-wrapper" style={{ backgroundColor: "green"}}>
            <div className="navbar-logo">
                {!auth && <a className="mobile-menu" id="mobile-collapse" href="#!">
                    <i className="ti-menu"></i>
                </a>}
                {!auth && <div className="mobile-search">
                    <div className="header-search">
                        <div className="main-search morphsearch-search">
                            <div className="input-group">
                                <span className="input-group-addon search-close"><i className="ti-close"></i></span>
                                <input type="text" className="form-control" placeholder="Enter Keyword" />
                                <span className="input-group-addon search-btn"><i className="ti-search"></i></span>
                            </div>
                        </div>
                    </div>
                </div>}
                <a href="index.html">
                    <img className="img-fluid" src="assets/images/logo3.png" style={{ width: 160}} alt="Theme-Logo" />
                </a>
               {!auth && <a className="mobile-options">
                    <i className="ti-more"></i>
                </a>}
            </div>

            {!auth && <div className="navbar-container container-fluid">
                 <ul className="nav-left">
                    <li>
                        <div className="sidebar_toggle"><a href="javascript:void(0)"><i className="ti-menu"></i></a></div>
                    </li>
                    <li className="header-search">
                        <div className="main-search morphsearch-search">
                            <div className="input-group">
                                <span className="input-group-addon search-close"><i className="ti-close"></i></span>
                                <input type="text" className="form-control" />
                                <span className="input-group-addon search-btn"><i className="ti-search"></i></span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#!" onclick="javascript:toggleFullScreen()">
                            <i className="ti-fullscreen"></i>
                        </a>
                    </li>
                </ul>
                <ul className="nav-right">
                    <li className="header-notification">
                        <a href="#!">
                            <i className="ti-bell"></i>
                            <span className="badge bg-c-pink"></span>
                        </a>
                        <ul className="show-notification">
                            <li>
                                <h6>Notifications</h6>
                                <label className="label label-danger">New</label>
                            </li>
                            <li>
                                <div className="media">
                                    <img className="d-flex align-self-center img-radius" src="assets/images/avatar-2.jpg" alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <h5 className="notification-user">John Doe</h5>
                                        <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                        <span className="notification-time">30 minutes ago</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="media">
                                    <img className="d-flex align-self-center img-radius" src="assets/images/avatar-4.jpg" alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <h5 className="notification-user">Joseph William</h5>
                                        <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                        <span className="notification-time">30 minutes ago</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="media">
                                    <img className="d-flex align-self-center img-radius" src="assets/images/avatar-3.jpg" alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <h5 className="notification-user">Sara Soudein</h5>
                                        <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                        <span className="notification-time">30 minutes ago</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    
                    <li className="user-profile header-notification">
                        <a href="#!">
                            <img src="assets/images/avatar-4.jpg" className="img-radius" alt="User-Profile-Image" />
                            <span>John Doe</span>
                            <i className="ti-angle-down"></i>
                        </a>
                        <ul className="show-notification profile-notification">
                            <li>
                                <a href="#!">
                                    <i className="ti-settings"></i> Settings
                                </a>
                            </li>
                            <li>
                                <a href="user-profile.html">
                                    <i className="ti-user"></i> Profile
                                </a>
                            </li>
                            
                            <li>
                                <a href="auth-lock-screen.html">
                                    <i className="ti-lock"></i> Lock Screen
                                </a>
                            </li>
                            <li>
                                <a href="auth-normal-sign-in.html">
                                <i className="ti-layout-sidebar-left"></i> Logout
                            </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>}
        </div>
  </nav>
    );
}
 
export default Header;