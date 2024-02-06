"use client";
import { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import Container from "@mui/material/Container";
import styles from "../styles/Acceuil.module.css";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";


export default function Acceuil() {
  const [dynamicText] = useTypewriter({
    words: ["Hello, My name is Baovola",
    "Je suis une Développeuse full-stack"],
    loop: true, 
    typeSpeed: 100,
    deleteSpeed: 40,
    delaySpeed: 1500,
  });

  
  return (
    <>
      <div className={styles.container}>
        <div data-aos="fade-right">
          <Container
            fixed
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              maxWidt: "100vw", // 100% de la largeur du viewport
              height: "60vh", // 50% de la hauteur du viewport
             
              
            }}
          >
            <Card
              sx={{
                background: "rgba(255, 255, 255, 0.1)",
                height: "20vh",
                padding: "15px",
                margin: "20px",
                borderRadius: "20px",
                width: { xs: "80%", sm: "70%", md: "60%", lg: "50%", xl: "40%" },
                //width: "100%",
                margin: "auto",
                border: "2px solid dark",
                backdropFilter: "blur(15px)",
                boxShadow: "20px 20px 50px rgba(0, 0, 0, 0.5)",
               
              }}
            >
              <CardContent>
                <h1 className={styles.text1}>{dynamicText}</h1>
              </CardContent>
            </Card>
          </Container>
        </div>
       
      </div>
    </>
  );
}
