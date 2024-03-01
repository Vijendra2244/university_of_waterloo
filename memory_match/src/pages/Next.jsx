import React from "react";
import nextImage from "../assets/y9u2_lpnk_210906.jpg";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ButtonCom from "../components/ButtonCom";
import styles from "./Next.module.css";

function Next() {
  return (
    <div>
      <Box>
        <img className={styles.nextImage} src={nextImage} alt="home" />
      </Box>

      <Link to="/start">
        <ButtonCom text={"Start"} />
      </Link>
    </div>
  );
}

export default Next;
