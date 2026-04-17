import React, { useEffect, useRef, useState } from "react";
import "../styles/carousel.css";

export default function Carosule() {
  let [index, setIndex] = useState(0);
  let time = useRef(null);

  let arr = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/74._CB783716748_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/UNREC/PC/78269._CB785061629_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/BISS_2024/2026/March/Hero_PC/3000x1200_5._CB784815551_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/PC/toys/2._CB785734045_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/yesbank/Shampoos__conditioners_pc._CB796616147_.png"
  ];

  function handleInc() {
    setIndex((prev) =>
      prev >= arr.length - 1 ? 0 : prev + 1
    );
  }

  function handleDec() {
    setIndex((prev) =>
      prev === 0 ? arr.length - 1 : prev - 1
    );
  }

  useEffect(() => {
    time.current = setInterval(() => {
      handleInc();
    }, 3000);

    return () => clearInterval(time.current);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-box">

        <button className="carousel-btn left" onClick={handleDec}>
          ❮
        </button>

        <img src={arr[index]} alt="carousel" />

        <button className="carousel-btn right" onClick={handleInc}>
          ❯
        </button>

      </div>
    </div>
  );
}