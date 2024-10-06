import React from 'react'

const Footer = () => {
  return (
    <>
   <footer className="text-center text-lg-start bg-warning text-dark">
    <section className="d-flex justify-content-center justify-content-lg-between p-1 border-bottom">
      <div className="me-3 d-none d-lg-block">
        <span><b>Get connected with us on social networks:</b></span>
      </div>
  
      <div>
        <footer className="text-center mt-1">
          <div className="container p-4 pb-0">
            <section className="mb-4">
              <a
                data-mdb-ripple-init
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#3b5998",fontSize:'30px' }}
                href="#!"
                role="button"
                ><i style={{fontSize:'30px'}} className="fab fa-facebook-f"></i
              ></a>&nbsp;&nbsp;
        
              <a
                data-mdb-ripple-init
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#55acee" ,fontSize:'30px'}}
                href="#!"
                role="button"
                ><i style={{fontSize:'30px'}} className="fab fa-twitter"></i
              ></a>&nbsp;&nbsp;
        
              <a
                data-mdb-ripple-init
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#dd4b39",fontSize:'30px' }}
                href="#!"
                role="button"
                ><i style={{fontSize:'30px'}} className="fab fa-google"></i
              ></a>&nbsp;&nbsp;
        
              <a
                data-mdb-ripple-init
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#ac2bac" ,fontSize:'30px'}}
                href="#!"
                role="button"
                ><i style={{fontSize:'30px'}} className="fab fa-instagram"></i
              ></a>
        
            </section>
          </div>
        </footer>
      </div>
    </section>
  
    <section className="">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-bird me-3"></i>SHOEZTORE
            </h6>
          </div>
  
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              FASHION
            </h6>
            <p>
              <a href="#!" className="text-reset">NIKE</a>
            </p>
            <p>
              <a href="#!" className="text-reset">ADIDAS</a>
            </p>
            <p>
              <a href="#!" className="text-reset">NEW BALANCE</a>
            </p>
            <p>
              <a href="#!" className="text-reset">CONVERSE</a>
            </p>
          </div>
  
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Useful links
            </h6>
            <p>
              <a href="" className="text-reset">NIKE</a>
            </p>
            <p>
              <a href="" className="text-reset">ADIDAS</a>
            </p>
            <p>
              <a href="" className="text-reset">NEW BALANCE</a>
            </p>
            <p>
              <a href="" className="text-reset">CONVERSE</a>
            </p>
          </div>
  
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i className="fas fa-home me-3"></i> Helsinki, Finland</p>
            <p>
              <i className="fas fa-envelope me-3"></i>
              contact@shoeztore.com
            </p>
            <p><i className="fas fa-phone me-3"></i> +358 123 4567</p>
            <p><i className="fas fa-print me-3"></i> +358 123 4568</p>
          </div>
        </div>
      </div>
    </section>
  
  </footer>

    </>
  )
}

export default Footer