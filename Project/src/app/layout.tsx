import Link from "next/link";
import Head from "next/head";
import React from 'react';
import Script from 'next/script';

import NavBar from "../components/NavBar"; 


const HomePage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Rufina:400,700"
          rel="stylesheet"
        />
        <title>CarVilla</title>
        <link rel="shortcut icon" type="image/icon" href="/assets/logo/favicon.png" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/linearicons.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/bootsnav.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </head>
      <body>
        <section id="home" className="welcome-hero">
          <div className="top-area">
            <div className="header-area">
              <nav className="navbar navbar-default bootsnav navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">
                <div className="container">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                      <i className="fa fa-bars"></i>
                    </button>
                    <Link href="/" className="navbar-brand">
                      carvilla<span></span>
                    </Link>
                  </div>
                  <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                    <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                      <li className="scroll active">
                        <Link href="#home" className="nav-link">home</Link>
                      </li>
                      <li className="scroll">
                        <Link href="#service" className="nav-link">service</Link>
                      </li>
                      <li className="scroll">
                        <Link href="#featured-cars" className="nav-link">featured cars</Link>
                      </li>
                      <li className="scroll">
                        <Link href="#new-cars" className="nav-link">new cars</Link>
                      </li>
                      <li className="scroll">
                        <Link href="#brand" className="nav-link">brands</Link>
                      </li>
                      <li className="scroll">
                        <Link href="#contact" className="nav-link">contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="container">
            <div className="welcome-hero-txt">
              <h2>get your desired car in reasonable price</h2>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <button className="welcome-btn">contact us</button>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="model-search-content">
                  <div className="row">
                    <div className="col-md-offset-1 col-md-2 col-sm-12">
                      <div className="single-model-search">
                        <h2>select year</h2>
                        <div className="model-select-icon">
                          <select className="form-control">
                            <option value="default">year</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                          </select>
                        </div>
                      </div>
                      <div className="single-model-search">
                        <h2>body style</h2>
                        <div className="model-select-icon">
                          <select className="form-control">
                            <option value="default">style</option>
                            <option value="sedan">sedan</option>
                            <option value="van">van</option>
                            <option value="roadster">roadster</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-offset-1 col-md-2 col-sm-12">
                      <div className="single-model-search">
                        <h2>select make</h2>
                        <div className="model-select-icon">
                          <select className="form-control">
                            <option value="default">make</option>
                            <option value="toyota">toyota</option>
                            <option value="holden">holden</option>
                            <option value="maecedes-benz">maecedes-benz.</option>
                          </select>
                        </div>
                      </div>
                      <div className="single-model-search">
                        <h2>car condition</h2>
                        <div className="model-select-icon">
                          <select className="form-control">
                            <option value="default">condition</option>
                            <option value="something">something</option>
                            <option value="something">something</option>
                            <option value="something">something</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-offset-1 col-md-2 col-sm-12">
                      <div className="single-model-search">
                        <h2>select model</h2>
                        <div className="model-select-icon">
                          <select className="form-control">
                            <option value="default">model</option>
                            <option value="kia-rio">kia-rio</option>
                            <option value="mitsubishi">mitsubishi</option>
                            <option value="ford">ford</option>
                          </select>
                        </div>
                      </div>
                      <div className="single-model-search">
                        <h2>select price</h2>
                        <div className="model-select-icon">
                          <select className="form-control">
                            <option value="default">price</option>
                            <option value="$0.00">$0.00</option>
                            <option value="$0.00">$0.00</option>
                            <option value="$0.00">$0.00</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-12">
                      <div className="single-model-search text-center">
                        <button className="welcome-btn model-search-btn">
                          search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                    <h2><a href="#">unlimited repair warranty</a></h2>
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
                    <h2><a href="#">insurance support</a></h2>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                          <img src="/images/new-cars-model/ncm1.png" alt="img" />
                        </div>
                      </div>
                      <div className="col-md-5 col-sm-12">
                        <div className="new-cars-txt">
                          <h2><a href="#">chevrolet camaro <span> za100</span></a></h2>
                          <span>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </span>
                          <span className="new-cars-para2">
                            Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                          </span>
                          <button className="welcome-btn new-cars-btn">
                            view details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Repeat similar blocks for other cars */}
              </div>
            </div>
          </div>
        </section>

        <section id="featured-cars" className="featured-cars">
          <div className="container">
            <div className="section-header">
              <p>checkout <span>the</span> featured cars</p>
              <h2>featured cars</h2>
            </div>
            <div className="featured-cars-content">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="single-featured-cars">
                    <div className="featured-img-box">
                      <div className="featured-cars-img">
                        <img src="/images/featured-cars/fc1.png" alt="cars" />
                      </div>
                      <div className="featured-model-info">
                        <span>
                          model: 2017
                          <span className="featured-mi-span"> 3100 mi</span>
                          <span className="featured-hp-span"> 240HP</span>
                          automatic
                        </span>
                      </div>
                    </div>
                    <div className="featured-cars-txt">
                      <h2><a href="#">BMW 6-series gran coupe</a></h2>
                      <h3>$89,395</h3>
                      <span>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
                      </span>
                    </div>
                  </div>
                </div>
                {/* Repeat similar blocks for other featured cars */}
              </div>
            </div>
          </div>
        </section>

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
                        <span>
                          Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.
                        </span>
                      </div>
                      <div className="testimonial-person">
                        <h2><a href="#">tomas lili</a></h2>
                        <h4>new york</h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Repeat similar blocks for other testimonials */}
              </div>
            </div>
          </div>
        </section>

        <section id="brand" className="brand">
          <div className="container">
            <div className="brand-area">
              <div className="owl-carousel owl-theme brand-item">
                <div className="item">
                  <a href="#">
                    <img src="/images/brand/br1.png" alt="brand-image" />
                  </a>
                </div>
                {/* Repeat similar blocks for other brands */}
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" className="contact">
          <div className="container">
            <div className="footer-top">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="single-footer-widget">
                    <div className="footer-logo">
                      <Link href="/">
                        carvilla
                      </Link>
                    </div>
                    <span>
                      Ased do eiusm tempor incidi ut labore et dolore magnaian aliqua. Ut enim ad minim veniam.
                    </span>
                    <div className="footer-contact">
                      <span>info@themesine.com</span>
                      <span>+1 (885) 2563154554</span>
                    </div>
                  </div>
                </div>
                {/* Repeat similar blocks for other footer sections */}
              </div>
            </div>
            <div className="footer-copyright">
              <div className="row">
                <div className="col-sm-6">
                  <span>
                    &copy; copyright.designed and developed by <a href="https://www.themesine.com/">themesine</a>.
                  </span>
                </div>
                <div className="col-sm-6">
                  <div className="footer-social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-pinterest-p"></i></a>
                    <a href="#"><i className="fa fa-behance"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="scroll-Top">
            <div className="return-to-top">
              <i className="fa fa-angle-up" id="scroll-top" data-toggle="tooltip" data-placement="top" title="Back to Top" aria-hidden="true"></i>
            </div>
          </div>
        </footer>

        <Script src="/js/jquery.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootsnav.js" strategy="beforeInteractive" />
        <Script src="/js/owl.carousel.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js" strategy="beforeInteractive" />
        <Script src="/js/custom.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
};

export default HomePage;