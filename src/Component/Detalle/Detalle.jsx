import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { get_detail_character, Reset_detail } from "../../redux/action";
function Detalle() {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.Detail);
  const episo = useSelector((state) => state.Episodes);
 const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    dispatch(get_detail_character(id));
    isLoading(false);
    return () => dispatch(Reset_detail);
  }, [dispatch]);

  return (
    <div className="container">
    {isLoading ? () => <div>Loading...</div> : null}
    <div className="container mt-5 col-12 col-md-7 col-lg-4">
      <div className="card border-info mb-3 mx-auto">
        <img src={detail.image} style={{ height: "300px" }} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{detail.name}</h5>
          <p className="card-text">
            {detail.status === "Alive" ? (
              <div className="alert   alert-info" role="alert">
                Status: {detail.status}
              </div>
            ) : (
              <div className="alert   alert-secondary" role="alert">
                <strong>Status: </strong> {detail.status}
              </div>
            )}
            <strong>Especie: </strong>
            {detail.species} <br></br> <strong>Status: </strong>
            {detail.status}
            <br />
            <strong>Location: </strong> {detail.location?.name}
          </p>
          <p className="card-text">
            <small className="text-muted">
              created: {new Date(detail.created).toLocaleString()}
            </small>
          </p>
          <Link to={"/"}>
            <button type="button" className="btn btn-outline-primary">
              Back
            </button>
          </Link>
        </div>
      </div>

    </div>
    <div className="container  mb-4"  >
      <h2 className="mt-4 mb-4">Episodes</h2>
        <div className="row g-3" >
   


          {episo?
            episo.map((ep) => (
              <div className="col-12 col-md-4 col-lg-3">
                <div className="card border-dark mb-2" >
                  <div className="card-body text-dark">
                    <h5 key={ep.id} className="card-title" style={{
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden"}}>{ep.name}</h5>
                    <p className="card-text">
                     <strong>Al Aire</strong> {ep.air_date}
                     <br></br>
                     <strong>Episode</strong> {ep.episode}
                    </p>
                  </div>
                </div>
              </div>
            )):(
              <h2 className="mt-4 mb-4">Not Found Episodes</h2>
            )}
        </div>
      </div>

    </div>

  );
}

export default Detalle;
