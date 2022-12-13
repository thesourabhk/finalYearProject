import React from "react";
import { Link } from "react-router-dom";
//import '../App.css';
import "../service.css";
function ServiceItem(props) {
  //   console.log(props.data.id);
  // const url = "/" + props.category + "/" + props.data.id;
  const imgurl = props.data.Poster;
  return (
    <div className="my-3">
      <br />
      <br />
      <br />
      <br />
      <div className="card" style={{ width: "18rem" }}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%',marginTop: '10px', zIndex: '1' }}>
          {props.data.imdbRating}
        </span>
        <img src={imgurl} className="card-img-top cardImg card__image" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.data.Title}</h5>
          <p className="card-text">{props.data.Plot}</p>
          {/* <Link to={url} className="btn btn-sm btn-primary">
            More Info
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
