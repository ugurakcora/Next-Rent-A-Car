"use client";

import React from "react";

import { useContext, useEffect, useState } from "react";

// Next Image
import Image from "next/image";

// React Scroll
import { Link } from "react-scroll";

// Components
import { SearchMobile } from "./SearchMobile";

// Media Query Hook
import { useMediaQuery } from "react-responsive";

// Icons
import { BiMenuAltRight, BiX } from "react-icons/bi";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    // Header
    console.log(desktopMode);
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    // Add Event Listener
    window.addEventListener("scroll", handleScroll);

    // Remove Event Listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  console.log(header);

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="mx-auto flex flex-col xl:container xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          {/* Logo */}
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image src={"icons/logo.svg"} alt="Logo" width={194} height={64} />
          </Link>

          {/* Nav Open Menu */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        {/* Nav */}
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            activeClass="active"
            className="cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="cars"
            smooth={desktopMode}
            spy={true}
            activeClass="active"
            className="cursor-pointer"
          >
            Cars
          </Link>
          <Link
            to="about"
            smooth={desktopMode}
            spy={true}
            activeClass="active"
            className="cursor-pointer"
          >
            About
          </Link>
          <Link
            to="why"
            smooth={desktopMode}
            spy={true}
            activeClass="active"
            className="cursor-pointer"
          >
            Why Us
          </Link>
          <Link
            to="testimonials"
            smooth={desktopMode}
            spy={true}
            activeClass="active"
            className="cursor-pointer"
          >
            Testimonials
          </Link>
          <Link
            to="contact"
            smooth={desktopMode}
            spy={true}
            activeClass="active"
            className="cursor-pointer"
          >
            Contact
          </Link>
          <Link
            onClick={() => setNav(!nav)}
            className="
                    xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto
                    "
            to="home"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            See all cards
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
