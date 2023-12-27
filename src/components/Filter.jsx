import React from 'react';
import { Link } from 'react-router-dom';

const Filter = ({handleSearch, searchTerm, path}) => {
    return ( 
        <div className="row px-3">
        <div className="col-lg-12 ">
          {/* <div className="card">
            <div className="card-body"> */}
              <div className="row align-items-center justify-content-between p-2">
                <div className="d-flex flex-column col-md-6 col-12 px-3 col-md-4 bg-muted ">
                  {/* <h2>{title}</h2> */}
                  {/* <span className="text-primary">{subTitle}</span> */}
                  <p>
                    Voir 
                    <select
                      // value={itemPerPage}
                      // onChange={setItemPerPage}
                      className="border-0 p-1 px-2"
                    >
                      <option value={60}>10</option>
                      <option value={45}>20</option>
                      <option value={35}>50</option>
                      <option value={15}>100</option>
                    </select>
                    Entrées sur
                    <span className="text-danger">
                      {document && document.length}
                    </span>
                    données
                  </p>
                </div>

                <div className="col-md-6 d-flex">
                  {/** <FaSearch className="text-danger" /> */}
                  <form className="d-flex h-25 w-50 col-md-6 col-12 px-3 rounded align-items-center rounded-md">
                    <input
                      type="text"
                      name="recherche"
                      className="form-control w-40"
                      style={{ outline: "none" }}
                      placeholder="Recherche"
                      onChange={handleSearch}
                      value={searchTerm}
                    />
                  </form>

                  <div className="mx-md-3">
                    <Link to={path} className="btn btn-primary text-white">
                      Ajouter <i className="fa fa-plus-circle"></i>
                    </Link>
                  </div>

                  <div className="bg-danger d-flex rounded align-items-center">
                    <a href="#" className="mx-3">
                      <i className="fa fa-download text-white"></i>
                    </a>
                    <a href="#" className="mx-md-2">
                      <i className="fa fa-cloud text-white"></i>
                    </a>
                    <a href="#"  className="mx-3">
                      <i className="fa fa-trash text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
            {/* </div>
          </div> */}
        </div>
      </div>
     );
}
 
export default Filter;