/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { getResource } from '../config/Api';

const Layout = () => {

    const [order, setOrders] = useState()
  const navigate = useNavigate();
  const _init_ = () =>{
   
  }
  

  useEffect(() => {
    _init_();
  }, [])


    return ( 
        <div className="topnav">
    <div className="container-fluid">
        <nav className="navbar navbar-light navbar-expand-lg topnav-menu">

            <div className="collapse navbar-collapse" id="topnav-menu-content">
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <Link className="nav-link " to="/" id="topnav-dashboard" 
                        >
                            <i className="bx bx-home-circle me-2"></i><span key="t-dashboards">Dashboard</span>
                        </Link>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-uielement" role="button"
                        >
                            <i className="bx bx-store"></i>
                            <span key="t-ui-elements"> Ecommerce</span> 
                            
                        </a>

                        <div className="dropdown-menu"
                            aria-labelledby="topnav-uielement">
                                    <div>
                                        <Link to="/product" className="dropdown-item" key="t-alerts">Produit</Link>
                                        <Link to="/add_product" className="dropdown-item" key="t-buttons">Ajouter Produit</Link>
                                        <Link to="/orders" className="dropdown-item" key="t-cards">Commandes</Link>
                                        <Link to="/categorie" className="dropdown-item" key="t-carousel">Categorie</Link>
                                        <Link to="/add_categorie" className="dropdown-item" key="t-dropdowns">Ajouter Categorie</Link>
                                        <Link to="/rayons" className="dropdown-item" key="t-dropdowns">Rayon</Link>
                                        <Link to="/etageres" className="dropdown-item" key="t-dropdowns">Etagere</Link>
                                        <Link to="/niveaux" className="dropdown-item" key="t-dropdowns">Niveau</Link>
                                        <Link to="/type_paiement" className="dropdown-item" key="t-dropdowns">Type de paiement</Link>
                                        
                                    </div>

                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages" role="button"
                        >
                            <i className="bx bx-user me-2"></i><span key="t-apps">Users</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="topnav-pages">
                            <Link to="/users" className="dropdown-item" key="t-chat">Users</Link>
                            <a href="apps-filemanager.html" className="dropdown-item" key="t-file-manager">Ajouter</a>
                            <div className="dropdown">
                                <a className="dropdown-item dropdown-toggle " href="#" id="topnav-email"
                                    role="button">
                                    <span key="t-email">Roles</span> <div className="arrow-down"></div>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="topnav-email">
                                    <Link to="/roles" className="dropdown-item" key="t-inbox">Roles</Link>
                                    <Link to="/add_role" className="dropdown-item" key="t-read-email">Ajouter Role</Link>
                                </div>
                            </div>
                
                            <div className="dropdown">
                                <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-ecommerce"
                                    role="button">
                                    <span key="t-ecommerce">Actions</span> <div className="arrow-down"></div>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="topnav-ecommerce">
                                    <Link to="/actions" className="dropdown-item" key="t-products">Actions</Link>
                                    <Link to="/add_action" className="dropdown-item" key="t-product-detail">Ajouter actions</Link>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-components" role="button"
                        >
                            <i className="bx bx-collection me-2"></i><span key="t-components">Ventes et Facturation</span> 
                        </a>
                        <div className="dropdown-menu" aria-labelledby="topnav-components">
                            <div className="dropdown">
                                <a className="dropdown-item dropdown-toggle  arrow-none" href="#" id="topnav-sale"
                                    role="button">
                                    <span key="t-forms">Ventes</span>
                                    
                                </a>
                                <div className="dropdown-menu" aria-labelledby="topnav-sale">
                                    <Link to="/sales" className="dropdown-item" key="t-inbox">Liste des ventes</Link>
                                    <Link to="/create_sale" className="dropdown-item" key="t-read-email">Ajouter Vente</Link>
                                    <Link to="/create_cart" className="dropdown-item" key="t-read-email">Creer Panier</Link>
                                    <Link to="/caisse_sale" className="dropdown-item" key="t-read-email">Caisse</Link>
                                </div>
                                
                            </div>
                            <div className="dropdown">
                                <a className="dropdown-item  arrow-none" href="#" id="topnav-table"
                                    role="button">
                                    <span key="t-tables">Facture Proforma</span>
                                </a>
                            </div>
                            <div className="dropdown">
                                <a className="dropdown-item  arrow-none" href="#" id="topnav-charts"
                                    role="button">
                                    <span key="t-charts">Bon de commande</span> <div className="arrow-down"></div>
                                </a>
                                
                            </div>
                            <div className="dropdown">
                                <a className="dropdown-item  arrow-none" href="#" id="topnav-icons"
                                    role="button">
                                    <span key="t-icons">Icons</span> <div className="arrow-down"></div>
                                </a>
                            </div>
                            
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-more" role="button"
                        >
                            <i className="bx bx-file me-2"></i><span key="t-extra-pages">Approvisionnement</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="topnav-more">
                            <div className="dropdown">
                                <Link className="dropdown-item arrow-none" to="/suppliers" id="topnav-invoice"
                                    >
                                    <span key="t-invoices">Fournisseurs</span>
                                </Link>
                            </div>
                            <div className="dropdonwn">
                                <Link className="dropdown-item  arrow-none" to="/purchases" id="topnav-auth"
                                    >
                                    <span key="t-authentication">Achats</span> 
                                </Link>
                            </div>
                            <div className="dropdown">
                                <a className="dropdown-item  arrow-none" href="#" id="topnav-utility"
                                    role="button">
                                    <span key="t-utility">Rapports</span> 
                                </a>
                                
                            </div>
                        </div>
                    </li>

                    <li className="nav-item ">
                        <Link className="nav-link  arrow-none" to="/audits" id="topnav-layout" 
                        >
                            <i className="bx bx-task me-2"></i><span key="t-layouts">Audits</span> 
                        </Link>
                    </li>

                    <li className="nav-item ">
                        <a className="nav-link  arrow-none" href="#" id="topnav-layout" role="button"
                        >
                            <i className="bx bx-message-rounded-dots me-2"></i><span key="t-layouts">Chat
                            </span>
                        </a>
                    </li>

                </ul>
            </div>
        </nav>
    </div>
</div> );
}
 
export default Layout;