import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {  get_all_characters} from "../../redux/action";
import Paginacion from "../Pagination/Paginacion";
import Search from "../Search/Search";
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import useBoolean from "../../hooks/useBoolean";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function Home() {
  const dispatch = useDispatch();
 
  const characteres = useSelector((state) => state.Characters);
  const error_search = useSelector((state) => state.Error);
  const info = useSelector((state) => state.Info);
  const [cargando, setCargando] = useBoolean(false)
  const [error, setError] = useBoolean(false)
  const [filter, setFilter] = useState({
    gender: "",
    species: "",
    status: ""
  });
 
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  const get_chacteres = (url) => {
    setCargando.on()
    dispatch(get_all_characters(url))
    .then((response)=> response)
    .catch((error)=> {  setError.on()})
    .finally(()=> setCargando.off());

  };
  useEffect(() => {
    setCargando.on()
    dispatch(
      get_all_characters("https://rickandmortyapi.com/api/character/?page=1")
    ).then((response)=> response)
    .catch((error)=> { setError.on()})
    .finally(()=> setCargando.off())
    
  }, [dispatch]);
  const handlenext = () => {
    get_chacteres(info.next)
  };
  const Handleprev = () => {
    get_chacteres(info.prev)

  };

  const filterStatus = (e)=>{
    e.preventDefault();
    setFilter({
      ...filter,
      status: e.target.value
    })
    // dispatch(Filter_Status(e.target.value))


  }
  const filterGender = (e)=>{
    e.preventDefault();
    // dispatch(Filter_Gender(e.target.value))
    setFilter({
      ...filter,
      gender: e.target.value
    })
  }

  const filterSpecie = (e)=>{
    e.preventDefault();
    setFilter({
      ...filter,
      species: e.target.value
    })
    // dispatch(Filter_Specie(e.target.value))
  }
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm-3 mb-4">
          <label htmlFor="status">Status: </label>
          <select
            className="form-select"
            id="status"
            aria-label="Default select example"
            onClick={e=>filterStatus(e)}
          >
            <option value="">Select One Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div className="col-sm-3">
          <label htmlFor="status">Gender: </label>
          <select
            className="form-select"
            id="status"
            aria-label="Default select example"
            onClick={e=>filterGender(e)}
          >
            <option value="">Select One Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <div className="col-sm-3">
          <label htmlFor="status">Specie: </label>
          <select
            className="form-select"
            id="status"
            aria-label="Default select example"
            onClick={e=>filterSpecie(e)}
          >
            <option value="">Select One Specie</option>
            {species.map((item, id) => (
              <option key={id} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="col-sm-3">
          
          <Search input={filter}/>
        </div>
      </div>
      
      <Paginacion
        handlenext={handlenext}
        Handleprev={Handleprev}
        next={info.next}
        prev={info.prev}
      />
{error? ( <div><div class="alert alert-danger" role="alert">
  <h4 class="alert-heading">Error</h4>
  <p>Hubo un error</p>
</div></div>): null}
{cargando ?( <div><Skeleton /> 
<Skeleton count={5} /> </div>): (
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
) }


      <Paginacion
        handlenext={handlenext}
        Handleprev={Handleprev}
        next={info.next}
        prev={info.prev}
      />
    </div>
  );
}

export default Home;
