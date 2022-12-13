import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../servicedetail.css";

function ServiceDetail(props) {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  // console.log(`${props.category}----------${id}`);
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `http://localhost:3000/api/${props.category}/${id}`
      );
      response = await response.json();
      setDetail(response[0]);
    }
    fetchData();
  }, []);
  return (
    <div>
      {detail && (
        <div>

          {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" /> */}
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="project-info-box mt-0">
                  <h5>{detail.name}</h5>
                  <p className="mb-0">The Details regarding the {detail.name} is provided below.<br/> The {detail.category} is accomodated with all the facilities.</p>
                </div>

                <div className="project-info-box">
                  {detail.address && <p><b>Address:</b> {detail.address}</p>}
                  <p><b>Category:</b> {detail.category}</p>
                  <p><b>Rating:</b> {detail.rating}</p>

                 {detail.rent && <p className="mb-0"><b>Rent:</b> {detail.rent} </p>}
                  <p><b>More details:</b> <a href={detail.urls} target="_blank">Click here for more details</a></p>
                </div>


              </div>

              <div className="col-md-7">
                <img src={detail.image} alt="project-image" className="rounded card_image borderimg" />
                {/* <div className="project-info-box">
                <p><b>Categories:</b> Design, Illustration</p>
                <p><b>Skills:</b> Illustrator</p>
            </div> */}
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default ServiceDetail;
