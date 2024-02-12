"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/About.module.css";
import VanillaTilt from "vanilla-tilt";

export default function About() {
  const [showListSkills, setShowListSkills] = useState(false);
  const [showListOutils, setShowListOutils] = useState(false);
  const [showListInterets, setShowListInterets] = useState(false);

  // Gestionnaires pour "Hard skills"
  const handleMouseEnterSkills = () => setShowListSkills(true);
  const handleMouseLeaveSkills = () => setShowListSkills(false);

  // Gestionnaires pour "Outils"
  const handleMouseEnterOutils = () => setShowListOutils(true);
  const handleMouseLeaveOutils = () => setShowListOutils(false);

  // Gestionnaires pour "Centre d'intérêt"
  const handleMouseEnterInterets = () => setShowListInterets(true);
  const handleMouseLeaveInterets = () => setShowListInterets(false);

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
      <div
        className={`${styles.container} flex items-center justify-center h-screen`}
      >
        {/* Contenu container*/}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-7">
          {/* Card1*/}
          <div data-aos="fade-right">
            <div className="card bg-blue-800/60 bg-opacity-20 backdrop-blur-md rounded-full p-5 w-60 h-60 shadow-2xl overflow-hidden flex items-center justify-center cercleZoom">
              <div
                className={styles.content}
                onMouseEnter={handleMouseEnterSkills}
                onMouseLeave={handleMouseLeaveSkills}
              >
                <h2 className={styles.titre2}>01</h2>
                {!showListSkills && (
                  <h3 className={styles.titre3}>Hard skills</h3>
                )}
                {showListSkills && (
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
          </div>
          {/* Card2*/}
          <div data-aos="zoom-out-up">
            <div className="card bg-red-400/60 bg-opacity-20 backdrop-blur-md  rounded-full p-5 w-60 h-60 shadow-2xl overflow-hidden flex items-center justify-center">
              <div
                className={styles.content}
                onMouseEnter={handleMouseEnterOutils}
                onMouseLeave={handleMouseLeaveOutils}
              >
                <h2 className={styles.titre2}>02</h2>
                {!showListOutils && <h3 className={styles.titre3}>Outils</h3>}
                {showListOutils && (
                  <ul>
                    <li>Méthodologie AGILE</li>
                    <li>Trello</li>
                    <li>User Stories</li>
                    <li>Figma-StarUML-Miro-Notion</li>
                    <li>PhpStorm</li>
                    <li>Eclipse IDE for Enterprise</li>
                    <li>Git</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          {/* Card3*/}
          <div data-aos="fade-left">
            <div className=" card bg-purple-400/60 bg-opacity-20 backdrop-blur-md  rounded-full p-5 w-60 h-60 shadow-2xl overflow-hidden flex items-center justify-center">
              <div
                className={styles.content}
                onMouseEnter={handleMouseEnterInterets}
                onMouseLeave={handleMouseLeaveInterets}
              >
                <h2 className={styles.titre2}>03</h2>
                {!showListInterets && (
                  <h3 className={styles.titre3}>Formations</h3>
                )}
                {showListInterets && (
                  <ul>
                    <li>2023:Orsys Digital School(Développement web)</li>
                    <li>
                      2023: LaCapsule(Conceptrice Développeuse d'application web
                      &mobile : Titre RNCP niveau6)
                    </li>
                    <li>Master2(RGPD,Droit de la propriété Intellectuel)</li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* final*/}
        </div>
      </div>
    </>
  );
}
