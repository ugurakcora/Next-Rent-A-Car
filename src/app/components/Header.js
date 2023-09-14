"use client";

import { useContext, useEffect, useState } from "react";

// Next Image
import Image from "next/image";

// React Scroll
import { Link } from "react-scroll";

// Components
import { SearchMobile } from "./SearchMobile";

// Media Query Hook
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
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

  return <div>Header</div>;
}
