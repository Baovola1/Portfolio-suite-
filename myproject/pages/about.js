"use client";
import React, { useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import styles from "../styles/About.module.css";


export default function About() {
 
 const [showList, setShowList] = useState(false);
 const [showListOutils, setShowListOutils] = useState(false);

 // Fonction pour changer le contenu après l'effet de zoom
 const handleMouseEnter = () => {
   setTimeout(() => setShowList(true), 400); // Retard pour laisser l'effet de zoom se terminer
 };

 const handleMouseLeave = () => {
   setShowList(false);
   
 };

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
    });
  }, []);

 

 

  return (
   <>
      <div className={styles.container}>
          {/* Contenu container*/}
          <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-4"> 
          {/* Card1*/}
          <div class="bg-blue-800/60 bg-opacity-20 backdrop-blur-md  rounded-full p-5 w-60 h-60 shadow-2xl overflow-hidden flex items-center justify-center">
              <div className={styles.content} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
                <h2 className={styles.titre2}>01</h2>
                {!showList && <h3 className={styles.titre3}>Hard skills</h3>}
                {showList && (
          
          <ul>
          <li>JavaEE</li>
          <li>JavaScript(React,React Native,Angular,NextJS)</li>
          <li>SQL(PostgresSQL)</li>
          <li>NoSQL(MongoDB)</li>
          <li>Nodejs</li>
          <li>ExpressJS</li>
          <li>TypeScript</li>
          <li>TDD(JUnit-Jest)</li>
        </ul>

        )}
                </div>
            </div>
            {/* Card2*/}
            <div class="bg-blue-800/60 bg-opacity-20 backdrop-blur-md  rounded-full p-5 w-60 h-60 shadow-2xl overflow-hidden flex items-center justify-center">
              <div className={styles.content} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
                <h2 className={styles.titre2}>02</h2>
                {!showListOutils && <h3 className={styles.titre3}>Outils</h3>}
                {showListOutils && (
          
          <ul>
                    <li>Méthodologie AGILE</li>
                    <li>Méthodologie Scrum</li>
                    <li>User Stories</li>
                    <li>intelliJ</li>
                    <li>PhpStorm</li>
                    <li>Eclipse IDE for Enterprise</li>
                    <li>Git</li>
                  </ul>


        )}
                </div>
            </div>
{/* Card3*/}
            </div>
            </div>
    </>
  )
}
