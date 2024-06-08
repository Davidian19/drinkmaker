"use client";

import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import logo from "@/assets/img/logoDrink.png";
import { dataBase } from "../app/firebaseConfig";

export default function Home() {
  const addDrink = async (drink: number) => {
    try {
      const ref = dataBase.ref("test/drinks");

      await ref.set(drink);
      //await ref.push("id", drink);
      console.log("Attempting to add drink:", drink);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <main className={styles.main}>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Image alt="logo" src={logo} width={300} height={200} />
        <h2 style={{ color: "#FFF" }}>Escolha sua bebida: </h2>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            flexDirection: "row",
            display: "flex",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Card sx={{ width: 100 }} onClick={() => addDrink(1)}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src="https://i.panelinha.com.br/i1/228-q-8730-blog-caipirinha-de-limao.webp"
                alt="Caipirinha"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Caipirinha
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cachaça e schweppes
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ width: 100 }} onClick={() => addDrink(2)}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://pubimg.band.uol.com.br/files/b8d56875f701473b38da.png"
                alt="Caipiroska"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Caipiroska
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Vodka e schweppes
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ width: 100 }} onClick={() => addDrink(3)}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://colherdeouro.com.br/wp-content/uploads/2024/01/Drink-Mojito.jpg"
                alt="Mojito"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mojito
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rum e schweppes
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          
        </Grid>
      </Grid>
    </main>
  );
}
