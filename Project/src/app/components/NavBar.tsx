// components/NavBar.tsx
"use client"; // Add this directive at the top

import Link from "next/link";
import { useEffect } from "react";
import $ from "jquery";

const NavBar = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const navbarSticky = function () {
        const getNav = $("nav.navbar.bootsnav");
        const navSticky = getNav.hasClass("navbar-sticky");

        if (navSticky) {
          const getHeight = getNav.height();
          $(".wrap-sticky").height(getHeight);

          const $wrapSticky = $(".wrap-sticky");
          if ($wrapSticky.length) {
            const getOffset = $wrapSticky.offset().top;
            $(window).on("scroll", function () {
              const scrollTop = $(window).scrollTop();
              if (scrollTop > getOffset) {
                getNav.addClass("sticked");
              } else {
                getNav.removeClass("sticked");
              }
            });
          } else {
            console.warn("Element with class 'wrap-sticky' not found.");
          }
        }
      };

      $(document).ready(function () {
        navbarSticky();
      });

      $(window).on("resize", function () {
        setTimeout(navbarSticky, 500);
      });

      return () => {
        $(window).off("scroll");
        $(window).off("resize");
      };
    }
  }, []);

  return (
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
          <Link href="/" className="navbar-brand">
            carvilla<span></span>
          </Link>
        </div>
        <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
          <ul
            className="nav navbar-nav navbar-right"
            data-in="fadeInDown"
            data-out="fadeOutUp"
          >
            <li className="scroll active">
              <Link href="#home" className="nav-link">
                home
              </Link>
            </li>
            <li className="scroll">
              <Link href="#service" className="nav-link">
                service
              </Link>
            </li>
            <li className="scroll">
              <Link href="#featured-cars" className="nav-link">
                featured cars
              </Link>
            </li>
            <li className="scroll">
              <Link href="#new-cars" className="nav-link">
                new cars
              </Link>
            </li>
            <li className="scroll">
              <Link href="#brand" className="nav-link">
                brands
              </Link>
            </li>
            <li className="scroll">
              <Link href="#contact" className="nav-link">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;