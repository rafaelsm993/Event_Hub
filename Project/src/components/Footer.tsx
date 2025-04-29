export default function Footer() {
    return (
        <footer id="contact" className="contact">
            <div className="container">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="footer-logo">
                                    <a href="index.html" aria-label="Carvilla Home">Carvilla</a>
                                </div>
                                <p>
                                    Ased do eiusm tempor incidi ut labore et dolore magnaian aliqua. Ut
                                    enim ad minim veniam.
                                </p>
                                <div className="footer-contact">
                                    <p>Email: <span>info@themesine.com</span></p>
                                    <p>Phone: +1 (885) 256-3154</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <div className="single-footer-widget">
                                <h2>About Devloon</h2>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Career</a></li>
                                    <li><a href="#">Terms of Service</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <div className="single-footer-widget">
                                <h2>Top Brands</h2>
                                <div className="row">
                                    <div className="col-md-7 col-xs-6">
                                        <ul>
                                            <li><a href="#">BMW</a></li>
                                            <li><a href="#">Lamborghini</a></li>
                                            <li><a href="#">Camaro</a></li>
                                            <li><a href="#">Audi</a></li>
                                            <li><a href="#">Infiniti</a></li>
                                            <li><a href="#">Nissan</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-5 col-xs-6">
                                        <ul>
                                            <li><a href="#">Ferrari</a></li>
                                            <li><a href="#">Porsche</a></li>
                                            <li><a href="#">Land Rover</a></li>
                                            <li><a href="#">Aston Martin</a></li>
                                            <li><a href="#">Mercedes</a></li>
                                            <li><a href="#">Opel</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-offset-1 col-md-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h2>Newsletter</h2>
                                <div className="footer-newsletter">
                                    <p>
                                        Subscribe to get the latest news updates and information.
                                    </p>
                                </div>
                                <div className="hm-foot-email">
                                    <div className="foot-email-box">
                                        <input type="email" className="form-control" placeholder="Enter your email" aria-label="Email address" />
                                    </div>
                                    <div className="foot-email-subscribe">
                                        <button type="button" aria-label="Subscribe">
                                            <i className="fa fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="row">
                        <div className="col-sm-6">
                            <p>
                                &copy; Copyright. Designed and developed by <a
                                    href="https://www.themesine.com/">Themesine</a>.
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <div className="footer-social">
                                <a href="#" aria-label="Facebook"><i className="fa fa-facebook"></i></a>
                                <a href="#" aria-label="Instagram"><i className="fa fa-instagram"></i></a>
                                <a href="#" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a>
                                <a href="#" aria-label="Pinterest"><i className="fa fa-pinterest-p"></i></a>
                                <a href="#" aria-label="Behance"><i className="fa fa-behance"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="scroll-Top">
                <div className="return-to-top">
                    <button type="button" id="scroll-top" data-toggle="tooltip"
                        data-placement="top" title="Back to Top" aria-label="Back to Top">
                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </footer>
    );
}