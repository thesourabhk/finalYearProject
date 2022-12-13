import React from "react";
import { Link } from "react-router-dom";
import "../home.scss";
function Home() {
  return (
    <div>
      <section class="light">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div class="container py-4">
          <article class="postcard dark blue">
            <div class="postcard__text">
              <h1 class="postcard__title blue">
                {" "}
                <Link to="/pg">Hostels/Pg's</Link>
              </h1>

              <div class="postcard__bar"></div>
              <div class="postcard__preview-txt">
                your pg or hostel isn’t just a place for you to dump your
                things, but a place where you’ll be spending most of your time
                in the coming months or years. The place should match your vibe
                and the overall environment should help you focus 100% on your
                work. So to answer the PG vs hostel question, ask yourself if
                you prefer to live by yourself, or with four others? Do you have
                to spend a thousand bucks on data packs every month, or does
                your rent cover it? And most importantly, if you get regular
                meals or you have to choose between Maggi and Wai Wai for
                dinner?
              </div>
            </div>
          </article>
          <article class="postcard dark blue">
            <div class="postcard__text">
              <h1 class="postcard__title blue">
                {" "}
                <Link to="/hospital">Hospitals/Clinics</Link>
              </h1>

              <div class="postcard__bar"></div>
              <div class="postcard__preview-txt">
                Hospitals complement and amplify the effectiveness of many other
                parts of the health system, providing continuous availability of
                services for acute and complex conditions. They concentrate
                scarce resources within well-planned referral networks to
                respond efficiently to population health needs.
              </div>
            </div>
          </article>
          {/* <article class="postcard dark blue">
            <div class="postcard__text">
              <h1 class="postcard__title blue">
                {" "}
                <Link to="/pg">Food Outlets</Link>
              </h1>

              <div class="postcard__bar"></div>
              <div class="postcard__preview-txt">
                The quality of food services is a hot topic on college campuses
                across the globe. It has a substantial influence on student
                retention. Positive campus dining experiences can enhance campus
                food service as an integrated part of student life and
                contribute to overall student retention efforts. However, up to
                now, there are few literatures with reference to the linkage
                between the quality of food service and the happiness and
                satisfaction of student life
              </div>
            </div>
          </article> */}
        </div>

        {/* <div className='container'>
        <Link to='/pg' className='btn btn-primary mx-3'>Pg</Link>
        <Link to='/hostel' className='btn btn-primary mx-3'>hostel</Link>
    </div> */}
      </section>
    </div>
  );
}

export default Home;
