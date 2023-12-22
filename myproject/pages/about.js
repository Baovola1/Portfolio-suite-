"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import VanillaTilt from "vanilla-tilt";
import styles from "../styles/About.module.css";
import ConstructionIcon from "@mui/icons-material/Construction";
import Layout from "@/components/Layout";

export default function About() {
  const [showMore, setShowMore] = useState(true);
  const [outil, setOutil] = useState(true);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
    });
  }, []);

  const clickMore = () => {
    setShowMore(!showMore); // Inverse l'état actuel
  };

  const goBack = () => {
    setShowMore(true); // Affiche la première liste
  };

  const clickOutil = () => {
    setOutil(!outil);
  };

  const handelBack = () => {
    setOutil(true);
  };

  return (
    <>
   
      <Layout>

      <div className={styles.aboutpage}>
        <div className={styles.parent}>
          <div data-aos="fade-down-right">
            <div className={`${styles.card} card`}>
              <div className={styles.content}>
                <h2 className={styles.titre2}>01</h2>
                <h3 className={styles.titre3}>Hard skills</h3>
                {showMore && (
                  <ul>
                    <li>JavaEE(Spring boot,JPA,Hibernate)</li>
                    <li>JavaScript(React,React Native,Angular,NextJS)</li>
                    <li>SQL(PostgresSQL)</li>
                    <li>NoSQL(MongoDB)</li>
                    <li>Nodejs</li>
                    <li>ExpressJS</li>
                    <li>TypeScript</li>
                    <li>TDD(JUnit-Jest)</li>
                  </ul>
                )}

                {showMore && (
                  <button onClick={clickMore} className={styles.btn}>
                    Next
                  </button>
                )}

                {!showMore && (
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind</li>
                    <li>Bootstrap</li>
                    <li>Material UI</li>
                  </ul>
                )}

                {!showMore && (
                  <button onClick={goBack} className={styles.btn}>
                    Back
                  </button>
                )}
              </div>
            </div>
          </div>
          <div data-aos="zoom-in">
            <div className={`${styles.card} card`}>
              <div className={styles.content}>
                <h2 className={styles.titre2}>02</h2>
                <h3 className={styles.titre3}>Soft Skills</h3>

                <ul>
                  <li>Organisation</li>
                  <li>Travail en équipe</li>
                  <li>Créativité</li>
                  <li>Capacité de décision</li>
                  <li>Autodidacte avec une veille permanente</li>
                </ul>
              </div>
            </div>
          </div>
          <div data-aos="fade-down-left">
            <div className={`${styles.card} card`}>
              <div className={styles.content}>
                <h2 className={styles.titre2}>03</h2>
                <ConstructionIcon sx={{ mr: 2, color: "white" }} />
                <h3 className={styles.titre3}>Outils</h3>
                {outil && (
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
                {outil && (
                  <button onClick={clickOutil} className={styles.btn}>
                    Next
                  </button>
                )}
                {!outil && (
                  <ul>
                    <li>VsCode</li>
                    <li>Kanban</li>
                    <li>Trello</li>
                    <li>Figma</li>
                    <li>Miro</li>
                    <li>Notion</li>
                    <li>StarUML</li>
                  </ul>
                )}

                {!outil && (
                  <button onClick={handelBack} className={styles.btn}>
                    Back
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
      
    </>
  );
}
