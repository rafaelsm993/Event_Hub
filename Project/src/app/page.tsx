import Search from '@/components/Search'

export default function Home() {
  return (
    <>
      <section id="home" className="welcome-hero">
        <div className="container">
          <div className="welcome-hero-txt">
            <h2>get your desired car in reasonable price</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              className="welcome-btn animated fadeInDown"
              style={{ opacity: 0 }}
            >
              contact us
            </button>
          </div>
        </div>
        <div className='container'> 
          <Search />
        </div>
      </section>

      {/* <!--service start--> */}
      <section id="service" className="service">
        <div className="container">
          <div className="service-content">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="single-service-item">
                  <div className="single-service-icon">
                    <i className="flaticon-car"></i>
                  </div>
                  <h2><a href="#">largest dealership <span> of</span> car</a></h2>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.  
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-service-item">
                  <div className="single-service-icon">
                    <i className="flaticon-car-repair"></i>
                  </div>
                  <h2><a href="#">unlimited repair warrenty</a></h2>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.  
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-service-item">
                  <div className="single-service-icon">
                    <i className="flaticon-car-1"></i>
                  </div>
                  <h2><a href="#">insurence support</a></h2>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--clients-say start--> */}
      <section id="clients-say" className="clients-say">
        <div className="container">
          <div className="section-header">
            <h2>what our clients say</h2>
          </div>
          <div className="row">
            <div className="owl-carousel testimonial-carousel">
              <div className="col-sm-3 col-xs-12">
                <div className="single-testimonial-box">
                  <div className="testimonial-description">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <img src="/images/clients/c1.png" alt="image of clients person" />
                      </div>
                    </div>
                    <div className="testimonial-comment">
                      <p>
                        Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit. 
                      </p>
                    </div>
                    <div className="testimonial-person">
                      <h2><a href="#">tomas lili</a></h2>
                      <h4>new york</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-xs-12">
                <div className="single-testimonial-box">
                  <div className="testimonial-description">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <img src="/images/clients/c2.png" alt="image of clients person" />
                      </div>
                    </div>
                    <div className="testimonial-comment">
                      <p>
                        Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit. 
                      </p>
                    </div>
                    <div className="testimonial-person">
                      <h2><a href="#">romi rain</a></h2>
                      <h4>london</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-xs-12">
                <div className="single-testimonial-box">
                  <div className="testimonial-description">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <img src="/images/clients/c3.png" alt="image of clients person" />
                      </div>
                    </div>
                    <div className="testimonial-comment">
                      <p>
                        Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit. 
                      </p>
                    </div>
                    <div className="testimonial-person">
                      <h2><a href="#">john doe</a></h2>
                      <h4>washington</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--new-cars start--> */}
      <section id="new-cars" className="new-cars">
        <div className="container">
          <div className="section-header">
            <p>checkout <span>the</span> latest cars</p>
            <h2>newest cars</h2>
          </div>
          <div className="new-cars-content">
            <div className="owl-carousel owl-theme" id="new-cars-carousel">
              <div className="new-cars-item">
                <div className="single-new-cars-item">
                  <div className="row">
                    <div className="col-md-7 col-sm-12">
                      <div className="new-cars-img">
                        <img src="/images/new-cars-model/ncm1.png" alt="img"/>
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                      <div className="new-cars-txt">
                        <h2><a href="#">chevrolet camaro <span> za100</span></a></h2>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                        </p>
                        <p className="new-cars-para2">
                          Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. 
                        </p>
                        <button className="welcome-btn new-cars-btn">
                          view details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="new-cars-item">
                <div className="single-new-cars-item">
                  <div className="row">
                    <div className="col-md-7 col-sm-12">
                      <div className="new-cars-img">
                        <img src="/images/new-cars-model/ncm2.png" alt="img"/>
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                      <div className="new-cars-txt">
                        <h2><a href="#">BMW series-3 wagon</a></h2>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                        </p>
                        <p className="new-cars-para2">
                          Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. 
                        </p>
                        <button className="welcome-btn new-cars-btn">
                          view details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="new-cars-item">
                <div className="single-new-cars-item">
                  <div className="row">
                    <div className="col-md-7 col-sm-12">
                      <div className="new-cars-img">
                        <img src="/images/new-cars-model/ncm3.png" alt="img"/>
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                      <div className="new-cars-txt">
                        <h2><a href="#">ferrari 488 superfast</a></h2>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                        </p>
                        <p className="new-cars-para2">
                          Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. 
                        </p>
                        <button className="welcome-btn new-cars-btn">
                          view details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}