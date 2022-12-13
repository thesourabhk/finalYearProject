import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import BlogItem from './BlogItem';

function Blog() {
    const [service, setService] = useState(null)
    useEffect(() => {
        fetch("http://localhost:3000/api/blog")
            .then(resp => {
                if (resp.ok === false) {
                    console.log('error!')
                }
                else {
                    return resp.json();
                }
            })
            .then(data => {
                setService(data)
                console.log(service)
            })
            .catch(err => { console.log(err) });
    }, [])

    return (
        <div className='container my-3'>
            <h2><Link to="/blog/create">Create a new one</Link></h2>
            {service && <div className="row">
                {service.map((element) => {
                    return <div className="col-md-4" key={element.id}>
                        <BlogItem data={element}/>
                    </div>
                })}
            </div>}

        </div>
    )
}

export default Blog