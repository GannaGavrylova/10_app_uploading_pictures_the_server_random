import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";

function CatImage() {
  const [cat, setCat] = useState("");

  useEffect(() => {
    fetchImag();
  }, []);

  async function fetchImag() {
    try {
      const urlImages = "https://api.thecatapi.com/v1/images/search";
      const response = await axios.get(urlImages);
      const imageUrl = response.data[0].url; // Получаем URL изображения из массива
      setCat(imageUrl); // Устанавливаем URL в состояние
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.img_container}>
      <h1>Random Cat Image</h1>
      {cat && <img src={cat} alt="cat" />}{" "}
      {/* Отображаем изображение только если URL существует */}
      <button onClick={fetchImag}>Load New Image</button>
    </div>
  );
}

export default CatImage;
