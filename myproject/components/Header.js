"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CoPresentIcon from "@mui/icons-material/CoPresent";



export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  
  return (
    <header className="bg-slate-800 text-white p-4 w-full z-50 fixed " >
      <div className="flex items-center justify-between">
        <Stack direction="row" spacing={2}>
          <Avatar alt="photo" src="/photo.png" sx={{ width: 56, height: 56 }} />
        </Stack>
        <button className="lg:hidden" onClick={toggleMenu}>
          {menuOpen ? <CloseIcon color="white" /> : <MenuIcon color="white" />}
        </button>
        <nav className={`lg:flex ${menuOpen ? "block" : "hidden"}`}>
          <Link  href="/">
          
            <div
              className={`block lg:inline-block px-2 py-1 ${
                router.pathname === "/" ? "bg-gray-800" : ""
              } hover:underline`}
            >
              <HomeIcon sx={{ mr: 0.8, color: "white" }} />
              Home
            </div>
            
          </Link>
          <Link href="/about">
         
            <div
              className={`block lg:inline-block px-2 py-1 ${
                router.pathname === "/about" ? "bg-gray-600" : ""
              } hover:underline`}
            >
              <CoPresentIcon sx={{ mr: 0.8, color: "white" }} />
              About
            </div>
          
          </Link>
          <Link href="/project" >
            <div
              className={`block lg:inline-block px-2 py-1 ${
                router.pathname === "/project" ? "bg-gray-600" : ""
              }hover:underline`}
            >
              <KeyboardIcon sx={{ mr: 0.8, color: "white" }} />
              Project
            </div> 
          </Link>
        </nav>
      </div>
    </header>
  );
}
