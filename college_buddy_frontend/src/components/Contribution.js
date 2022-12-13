import React from 'react'
import '../contribution.css'
function Contribution() {
  return (


    <div>
      <div class="background">
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>Contribute </span>
                  <span>To Our Page</span>
                </div>
                <div class="app-contact">CONTACT INFO : FreshersStop@gmail.com</div>
              </div>
              <div class="screen-body-item">
                <form action="http://localhost:3000/api/contribute" method="post">
                  <div class="app-form">
                    <div class="app-form-group">
                      <input class="app-form-control" name="name" placeholder="NAME" />
                    </div>
                    <div class="app-form-group">
                      <input class="app-form-control" name="address" placeholder="Enter Address" />
                    </div>
                    <div class="app-form-group message">
                      <input class="app-form-control" name="gmaplink" placeholder="LINK" />
                    </div>
                    <div class="app-form-group buttons">
                      <button type="submit" class="app-form-button">SUBMIT</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* <form method="post" action="http://localhost:3000/api/contribute">
                <div class="mb-3">
                    <label for="exampleInputEmail1" name="name">name</label>
                    <input type="text" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" name="address">address</label>
                    <input type="text" name="address" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" name="gmaplink">link</label>
                    <input type="text" name="gmaplink" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form> */}
    </div>
  )
}

export default Contribution