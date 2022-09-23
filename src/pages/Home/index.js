import React from 'react'
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// Styles
import "../../index.css";

function Home() {
    return (
        <div id="layoutSidenav_content">
          <main>
            <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
              <div className="container-xl px-4">
                <div className="page-header-content pt-4">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-auto mt-4">
                      <h1 className="page-header-title">
                        Get to know me!
                      </h1>
                      <div className="page-header-subtitle">Here are some important details to contact me.</div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* Main page content*/}
            <div className="container-xl px-4 mt-n10">
              <div className="card">
                <div className="card-body text-center">
                <h1>Angel Summer Rain M. Rivera</h1>
                    <div className="pt-3">
                        <h5>Contact Me</h5>
                        <a href="mailto:rivera.angelsummer@gmail.com" className="btn btn-outline-primary" type="button">rivera.angelsummer@gmail.com</a>&nbsp;
                        <a href="tel:+639674567332" className="btn btn-outline-primary" type="button">(+63) 967-4567-332</a>
                    </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
      </div>
      );
}

export default Home;