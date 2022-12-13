import React from 'react'
import { Link } from "react-router-dom"
import '../blog.css'

function BlogItem(props) {
  const url = "/blog/" + props.data.id;
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var today = props.data.create_date.slice(0, 10);
  var javaDate = new Date(today);

  console.log(javaDate)
  var blogData = props.data.blog_data;
  // console.log(today.toLocaleDateString("en-US")); // 9/17/2016
  // console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
  // console.log(today.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर 2016
  return (

    <div>
      <div className="my-3 container">
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '72%', marginTop: '10px', zIndex: '1' }}>
            {javaDate.toLocaleDateString("en-IN", options)}
          </span>
          <div className="card__header">
            <img src={props.data.img_src} alt="card__image" className="card__image" width="600" />
          </div>
          <div className="card__body">
            <h5 className="card-title">{props.data.title}</h5>
            <span className="tag tag-blue">{props.data.category}</span>
            <Link to={url} className="btn btn-sm btn-primary">more detail</Link>
          </div>

        </div>

      </div>

      {/* <div className='my-3'>
            <br />
            <br />
            <br />
            <br />
            <div className="card" style={{width: "18rem"}}>
                <img src={imgurl} className="card-img-top cardImg" />
                    <div className="card-body">
                        <h5 className="card-title">{props.data.create_date}</h5>
                        <p className="card-text">{props.data.blog_data}</p>
                        <Link to = {url} className="btn btn-sm btn-primary">More Info</Link>
                    </div>
            </div>
        </div> */}
    </div>
  )
}

export default BlogItem