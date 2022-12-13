import React, { useState, useEffect } from "react";
import ServiceItem from "./ServiceItem";
// ${props.category}
function Service(props) {
  const [service, setService] = useState(null);
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=62922bf3&s=${props.category}&r=json`)
      .then((resp) => {
        if (resp.ok === false) {
          console.log("error!");
        } else {
          return resp.json();
        }
      })
      .then((data) => setService(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(service.Search)
  // console.log(service.Search.length)
  return (
    <div className="container my-3">
      {service && (
        <div className="row">
          {service.map((element) => {
            return (
              <div className="col-md-3" key={element.Poster}>
                <ServiceItem data={element} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Service;
