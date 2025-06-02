'use client';
import Link from "next/link";
import { useAuth } from '../app/context/AuthContext'; 

export default function Navbar() {
  const { isLoggedIn } = useAuth();
  console.log('Is Logged In:', isLoggedIn);

  return (
    <div className="top-area">
      <div className="header-area">
        <nav
          className="navbar navbar-default bootsnav navbar-sticky navbar-scrollspy"
          data-minus-value-desktop="70"
          data-minus-value-mobile="55"
          data-speed="1000"
        >
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="/">
                EVENT HUB<span></span>
              </a>
            </div>
            <div
              className="collapse navbar-collapse menu-ui-design"
              id="navbar-menu"
            >
              <ul
                className="nav navbar-nav navbar-right"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className="scroll active">
                  <a href="#home">INICIO</a>
                </li>
                <li className="scroll">
                  <a href="#service">EVENTOS</a>
                </li>
                <li className="scroll">
                  <a href="#new-cars">FEEDBACK</a>
                </li>
                <li className="scroll">
                  <a href="#contact">CONTATO</a>
                </li>
                  {!isLoggedIn && (
                    <li >
                      <Link href="/login">ENTRAR</Link>
                    </li>
                  )}
              </ul>
             </div>
          </div>
        </nav>
      </div>
      <div className="clearfix"></div>
    </div>
  );
}