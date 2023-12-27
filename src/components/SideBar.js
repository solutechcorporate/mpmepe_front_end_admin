/* eslint-disable jsx-a11y/role-supports-aria-props */

import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
const SideBar = () => {
    return ( 
        <nav className="pcoded-navbar">
                        <div className="sidebar_toggle"><a href="#"><i className="icon-close icons"></i></a></div>
                        <div className="pcoded-inner-navbar main-menu">
                            
                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.navigation">General</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className="active">
                                    <Link to="/home">
                                        <span className="pcoded-micon"><i className="ti-home"></i><b>D</b></span>
                                        <span className="pcoded-mtext" data-i18n="nav.dash.main">Accueil</span>
                                        <span className="pcoded-mcaret"></span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="/articles">
                                        <span className="pcoded-micon"><i className="ti-file"></i></span>
                                        <span className="pcoded-mtext"  data-i18n="nav.basic-components.main">Articles</span>
                                        <span className="pcoded-mcaret"></span>
                                    </Link>
                                </li>
                                <li className="">
                                    <a href="">
                                        <span className="pcoded-micon"><i className="ti-control-play"></i></span>
                                        <span className="pcoded-mtext"  data-i18n="nav.basic-components.main">Media</span>
                                        <span className="pcoded-mcaret"></span>
                                    </a>
                                </li>
                            </ul>
                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.forms">Documents</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li>
                                    <Link to="/categorie">
                                        <span className="pcoded-micon"><i className="ti-layers-alt"></i><b>FC</b></span>
                                        <span className="pcoded-mtext" data-i18n="nav.form-components.main">Categories</span>
                                        <span className="pcoded-mcaret"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/documents">
                                        <span className="pcoded-micon"><i className="ti-file"></i><b>FC</b></span>
                                        <span className="pcoded-mtext" data-i18n="nav.form-components.main">Document</span>
                                        <span className="pcoded-mcaret"></span>
                                    </Link>
                                </li>

                            </ul>

                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.forms">Contact</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li>
                                    <Link to="/type_demande">
                                        <span className="pcoded-micon"><i className="ti-layers"></i><b>FC</b></span>
                                        <span className="pcoded-mtext" data-i18n="nav.form-components.main">Valeur demande</span>
                                        <span className="pcoded-mcaret"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/demande">
                                        <span className="pcoded-micon"><i className="ti-layers"></i><b>FC</b></span>
                                        <span className="pcoded-mtext" data-i18n="nav.form-components.main">Demande</span>
                                        <span className="pcoded-mcaret"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                        <span className="pcoded-micon"><i className="ti-layers"></i><b>FC</b></span>
                                        <span className="pcoded-mtext" data-i18n="nav.form-components.main">Contact</span>
                                        <span className="pcoded-mcaret"></span>
                                    </Link>
                                </li>

                            </ul>

                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.other">Ministere</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className="">
                                    <Link to="/ministeres">
                                        <span className="pcoded-micon"><i className="ti-id-badge"></i><b>M</b></span>
                                        <span className="pcoded-mtext" data-i18n="nav.menu-levels.main">Ministere</span>
                                        <span className="pcoded-mcaret"></span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="/directions">
                                        <span className="pcoded-micon"><i className="ti-direction-alt"></i><b>M</b></span>
                                        <span className="pcoded-mtext" data-i18n="nav.menu-levels.main">Direction</span>
                                        <span className="pcoded-mcaret"></span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="/dirigeants">
                                        <span className="pcoded-micon"><i className="ti-user"></i><b>M</b></span>
                                        <span className="pcoded-mtext" data-i18n="nav.menu-levels.main">Dirigeant</span>
                                        <span className="pcoded-mcaret"></span>
                                    </Link>
                                </li>
                            </ul>

                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.other">Apparence</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className="">
                                    <Link to="/header">
                                        <span className="pcoded-micon"><i className="ti-menu"></i><b>M</b></span>
                                        <span className="pcoded-mtext" data-i18n="nav.menu-levels.main">Menu</span>
                                        <span className="pcoded-mcaret"></span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="/menu">
                                        <span className="pcoded-micon"><i className="ti-menu"></i><b>M</b></span>
                                        <span className="pcoded-mtext" data-i18n="nav.menu-levels.main">Sous Menu</span>
                                        <span className="pcoded-mcaret"></span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="/sous_menu">
                                        <span className="pcoded-micon"><i className="ti-menu-alt"></i><b>M</b></span>
                                        <span className="pcoded-mtext" data-i18n="nav.menu-levels.main">Sous sous Menu</span>
                                        <span className="pcoded-mcaret"></span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="/page">
                                        <span className="pcoded-micon"><i className="ti-receipt"></i><b>M</b></span>
                                        <span className="pcoded-mtext" data-i18n="nav.menu-levels.main">Page</span>
                                        <span className="pcoded-mcaret"></span>
                                    </Link>
                                </li>
                            </ul>

                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.other">Reglages</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className="">
                                    <Link to="/copyright">
                                        <span className="pcoded-micon"><i className="ti-layers"></i><b>M</b></span>
                                        <span className="pcoded-mtext" data-i18n="nav.menu-levels.main">Copyright</span>
                                        <span className="pcoded-mcaret"></span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="/social">
                                        <span className="pcoded-micon"><i className="ti-share"></i><b>M</b></span>
                                        <span className="pcoded-mtext" data-i18n="nav.menu-levels.main">Social-media</span>
                                        <span className="pcoded-mcaret"></span>
                                    </Link>
                                </li>
                            </ul>

                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.other">Utilisateurs</div>
                            <ul className="pcoded-item pcoded-left-item" style={{ marginBottom: 10}}>
                                <li className="">
                                    <Link to="/historiques">
                                        <span className="pcoded-micon"><i className="ti-save"></i><b>M</b></span>
                                        <span className="pcoded-mtext" data-i18n="nav.menu-levels.main">Historiques</span>
                                        <span className="pcoded-mcaret"></span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="/role">
                                        <span className="pcoded-micon"><i className="ti-user"></i><b>M</b></span>
                                        <span className="pcoded-mtext" data-i18n="nav.menu-levels.main">Roles</span>
                                        <span className="pcoded-mcaret"></span>
                                    </Link>
                                </li>
                                <li style={{ marginBottom: 10}}>
                                    <Link to="/users">
                                        <span className="pcoded-micon"><i className="ti-user"></i><b>M</b></span>
                                        <span className="pcoded-mtext" data-i18n="nav.menu-levels.main">Gestion des utilisateurs</span>
                                        <span className="pcoded-mcaret"></span>
                                    </Link>
                                </li>
                                <li style={{ marginBottom: 60, padding: "30px"}}>
                                    <button type="submit" className="btn-block btn-danger">
                                        Deconnexion
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </nav>
     );
}
 
export default SideBar;