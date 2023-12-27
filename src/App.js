import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Article from './screens/General/article';
import Document from './screens/Document/document';
import Ministere from './screens/Ministere/ministere';
import Direction from './screens/Ministere/direction';
import Dirigeant from './screens/Ministere/dirigeant';
import Copyright from './screens/Settings/copyright';
import SousMenu from './screens/Apparence/sousMenu';
import AddDirection from './screens/Ministere/AddDirection';
import AddDirigeant from './screens/Ministere/AddDirigeant';
import AddMinistere from './screens/Ministere/AddMinistere';
import AddArticle from './screens/General/AddArticle';
import HeaderScreen from './screens/Apparence/Header';
import AddHeader from './screens/Apparence/AddHeader';
import AddDemande from './screens/Contact/AddDemande';
import AddTypeDemande from './screens/Contact/AddTypeDemande';
import Demande from './screens/Contact/Demande';
import TypeDemande from './screens/Contact/TypeDemande';
import Menu from './screens/Apparence/Menu';
import AddSousMenu from './screens/Apparence/AddSousMenu';
import AddMenu from './screens/Apparence/AddMenu';
import AddPage from './screens/Apparence/AddPage';
import Page from './screens/Apparence/Page';
import AddCopyright from './screens/Settings/AddCopy';
import AddRole from './screens/Users/AddRole';
import Role from './screens/Users/Role';
import Users from './screens/Users/users';
import AddUsers from './screens/Users/AddUsers';
import AddCategorie from './screens/Document/AddCategorie';
import Categorie from './screens/Document/Categorie';
import AddSocial from './screens/Settings/AddSocial';
import SocialNetwork from './screens/Settings/Social';
import Contact from './screens/Contact/Contact';
import AddContact from './screens/Contact/AddContact';
import Historique from './screens/Users/Historique';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/articles" element={<Article/>}/>
      <Route path="/documents" element={<Document/>}/>
      <Route path="/ministeres" element={<Ministere/>}/>
      <Route path="/directions" element={<Direction/>}/>
      <Route path="/dirigeants" element={<Dirigeant/>}/>
      <Route path="/copyright" element={<Copyright/>}/>
      <Route path="/sous_menu" element={<SousMenu/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/header" element={<HeaderScreen/>}/>
      <Route path="/demande" element={<Demande/>}/>
      <Route path="/type_demande" element={<TypeDemande/>}/>
      <Route path="/page" element={<Page />}/>
      <Route path="/role" element={<Role />}/>
      <Route path="/users" element={<Users />}/>
      <Route path="/categorie" element={<Categorie />}/>
      <Route path="/social" element={<SocialNetwork />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/historiques" element={<Historique />}/>

      {/* // Routes des ajouts */}
      <Route path="/add_article" element={<AddArticle/>}/>
      <Route path="/add_direction" element={<AddDirection/>}/>
      <Route path="/add_dirigeant" element={<AddDirigeant/>}/>
      <Route path="/add_ministere" element={<AddMinistere/>}/>
      <Route path="/add_header" element={<AddHeader/>}/>
      <Route path="/add_demande" element={<AddDemande/>}/>
      <Route path="/add_type_demande" element={<AddTypeDemande/>}/>
      <Route path="/add_sous_menu" element={<AddSousMenu/>}/>
      <Route path="/add_menu" element={<AddMenu/>}/>
      <Route path="/add_page" element={<AddPage/>}/>
      <Route path="/add_copy" element={<AddCopyright/>}/>
      <Route path="/add_role" element={<AddRole/>}/>
      <Route path="/add_users" element={<AddUsers/>}/>
      <Route path="/add_categorie" element={<AddCategorie/>}/>
      <Route path="/add_social" element={<AddSocial/>}/>
      <Route path="/add_contact" element={<AddContact/>}/>


    </Routes>
  );
}

export default App;
