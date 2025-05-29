'use client'
import { useState } from 'react';
import Modal from './Modal'; // Existing Modal component
import SignUp_Form from './SignUp_Form'; // Import the SignUp_Form component
import LoginForm from './LoginForm'; // Import the LoginForm component'

export default function Navbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpFormOpen, setIsSignUpFormOpen] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const toggleSignUpForm = () => {
    setIsSignUpFormOpen(!isSignUpFormOpen);
  };
  const toggleLoginModalOpen = () => {
    setIsLoginFormOpen(!isLoginFormOpen);
  };

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
                <li className="scroll">
                  <a href="#login-modal" data-toggle="modal">
                    <button onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleLoginModal();
                    }}>
                      CADASTRO
                    </button>
                  </a>
                </li>
                <li className="scroll">
                  <a href="#signup-form" data-toggle="modal">
                    <button onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleSignUpForm();
                    }}>
                      CRIAR EVENTO
                    </button>
                  </a>
                </li>
                <li className="scroll">
                  <a href="#signup-form" data-toggle="modal">
                    <button onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleLoginModalOpen();
                    }}>
                      LOGIN
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="clearfix"></div>
      {isLoginModalOpen && <Modal />}
      {isSignUpFormOpen && <SignUp_Form />}
      {isLoginFormOpen && <LoginForm />}
      
    </div>
  );
}