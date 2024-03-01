import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../assets/fzg3_lqub_210906.jpg";
import styles from "./Home.module.css";
import ButtonCom from "../components/ButtonCom";

function Home() {
  return (
    <div className="styles.main">
      <Box>
        <img className={styles.homeImage} src={homeImage} alt="home" />
      </Box>

      <Link to="/next">
        <ButtonCom text={"Next"} />
      </Link>
    </div>
  );
}

export default Home;
