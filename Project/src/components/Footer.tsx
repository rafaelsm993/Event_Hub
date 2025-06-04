export default function Footer() {
  return (
    <footer id="contact" className="contact">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-logo">
                  <a href="index.html" aria-label="Carvilla Home">
                    Eventhub
                  </a>
                </div>
                <p>
                  Event Hub cria experiências únicas com dedicação e alegria.
                  Transformamos cada momento em celebração.
                </p>
                <div className="footer-contact">
                  <p>
                    Email: <span>germaniasjc@gmail.com</span>
                  </p>
                  <p>Telefone: +55 (12)99614-7372</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="single-footer-widget">
                <h2>Sobre Eventhub</h2>
                <ul>
                  <li>
                    <a href="#">Sobre nós</a>
                  </li>
                  <li>
                    <a href="#">Carreira</a>
                  </li>
                  <li>
                    <a href="#">termos de serviço</a>
                  </li>
                  <li>
                    <a href="#">politica de privacidade</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-xs-12">
              <div className="single-footer-widget">
                <h2>Maiores clientes</h2>
                <div className="row">
                  <div className="col-md-7 col-xs-6">
                    <ul>
                      <li>
                        <a href="#">180 Ubatuba</a>
                      </li>
                      <li>
                        <a href="#">Hopi Hari</a>
                      </li>
                      <li>
                        <a href="#">Varandas</a>
                      </li>
                      <li>
                        <a href="#">Rock in Rio</a>
                      </li>
                      <li>
                        <a href="#">Sunlight festival</a>
                      </li>
                      <li>
                        <a href="#">Kalahari</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-5 col-xs-6">
                    <ul>
                      <li>
                        <a href="#">Burning Man</a>
                      </li>
                      <li>
                        <a href="#">Mutley Bar</a>
                      </li>
                      <li>
                        <a href="#">CDG Beer</a>
                      </li>
                      <li>
                        <a href="#">Kapadokya Baloons</a>
                      </li>
                      <li>
                        <a href="#">The Town</a>
                      </li>
                      <li>
                        <a href="#">Tomorrowland</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-offset-1 col-md-3 col-sm-6">
              <div className="single-footer-widget">
                <h2>Novidades</h2>
                <div className="footer-newsletter">
                  <p>
                    Assine para receber as últimas novidades e informações da
                    Event Hub.
                  </p>
                </div>
                <div className="hm-foot-email">
                  <div className="foot-email-box">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      aria-label="Email address"
                    />
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
                &copy; Copyright. Designed and developed by{" "}
                <a href="https://www.themesine.com/">Themesine</a>.
              </p>
            </div>
            <div className="col-sm-6">
              <div className="footer-social">
                <a href="#" aria-label="Facebook">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="#" aria-label="Pinterest">
                  <i className="fa fa-pinterest-p"></i>
                </a>
                <a href="#" aria-label="Behance">
                  <i className="fa fa-behance"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="scroll-Top">
        <div className="return-to-top">
          <button
            type="button"
            id="scroll-top"
            data-toggle="tooltip"
            data-placement="top"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <i className="fa fa-angle-up" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}
