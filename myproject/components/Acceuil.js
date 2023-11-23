"use client";
import { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import Container from "@mui/material/Container";
import styles from "../styles/Acceuil.module.css";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";

export default function Acceuil() {
  const [typeEffectBaovola] = useTypewriter({
    words: ["Hello, My name is Baovola"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  const [typeEffectFullStack] = useTypewriter({
    words: ["Je suis une Développeuse full-stack"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  const [buttonClicked, setButtonClicked] = useState(false);

  // Texte à afficher dans le h1 en fonction du bouton cliqué
  const dynamicText = buttonClicked ? typeEffectFullStack : typeEffectBaovola;

  const handleClick = () => {
    // Mise à jour de l'état pour changer le texte du h1
    setButtonClicked(!buttonClicked);
  };

 

  return (
    <>
      <div className={styles.acceuilpage}>
        <div data-aos="fade-right">
          <Container
            fixed
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              height: "60vh",
            }}
          >
            <Card
              sx={{
                background: "rgba(255, 255, 255, 0.1)",
                height: "20vh",
                padding: "15px",
                margin: "20px",
                borderRadius: "20px",
                width: "50%",
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

            <IconButton onClick={handleClick} style={{ color: "cyan" }}>
              <Fingerprint style={{ fontSize: "2rem" }} />
              <span style={{ color: "white", fontSize: "20px" }}>
                Click here
              </span>
            </IconButton>
          </Container>
        </div>
      </div>
    </>
  );
}
