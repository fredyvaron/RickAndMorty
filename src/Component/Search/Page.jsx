import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Paginacion from "../Pagination/Paginacion";
import { Link, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { get_all_characters, search_chacter_name } from '../../redux/action';

function Page() {
    const characteres = useSelector((state) => state.Characters);
    const search_error = useSelector((state) => state.Error);
    const info = useSelector((state) => state.Info);
    const dispatch = useDispatch();
    const {name} = useParams();
    const get_chacteres = (url) => {
        dispatch(get_all_characters(url));
    
      };
    const handlenext = () => {
        get_chacteres(info.next);
      };
      const Handleprev = () => {
        get_chacteres(info.prev);
      };
     
  return (
    <div className="container mt-4">

      <Paginacion
        handlenext={handlenext}
        Handleprev={Handleprev}
        next={info.next}
        prev={info.prev}
      />
             <div className="row mt-4 mb-4">
        {characteres.map((character) => (
          <div key={character.id} className="col-12 col-md-4 col-lg-3 border-info mb-3">
            <div className="card border-info">
              <img
                src={character.image}
                className="card-img-top"
                alt={character.name}
              />
              <div className="card-body">
                <Link to={`/detalle/${character.id}`}>
                  {" "}
                  <p className="card-text">{character.name}</p>{" "}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Paginacion
        handlenext={handlenext}
        Handleprev={Handleprev}
        next={info.next}
        prev={info.prev}
      />
    </div>
  )
}

export default Page