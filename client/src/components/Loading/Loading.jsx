import React from "react";
import loading from "../../styles/Gifs/loading.gif";
import styles from "../Loading/Loading.module.css";

function Loading() {
  return (
    <div className={styles.load}>
      <img src={loading} alt="loading"></img>
    </div>
  );
}

export default Loading;
