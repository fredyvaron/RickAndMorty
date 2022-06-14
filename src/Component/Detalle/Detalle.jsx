import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { get_detail_character, Reset_detail } from "../../redux/action";
function Detalle() {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.Detail);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    dispatch(get_detail_character(id));
    return () => dispatch(Reset_detail);
  }, [dispatch]);
  return (
    <div className="container mt-5 " style={{ width: "400px" }}>
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
      <button type="button" class="btn btn-outline-primary">Back</button>
      </Link>
        </div>
      </div>
    </div>
  );
}

export default Detalle;
