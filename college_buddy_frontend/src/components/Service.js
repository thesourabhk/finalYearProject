import React, { useState, useEffect } from "react";
import ServiceItem from "./ServiceItem";

function Service(props) {
  const [service, setService] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/api/${props.category}`)
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

  console.log(service)

  return (
    <div className="container my-3">
      {service && (
        <div className="row">
          {service.map((element) => {
            return (
              <div className="col-md-3" key={element.id}>
                <ServiceItem data={element} category={props.category} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Service;
