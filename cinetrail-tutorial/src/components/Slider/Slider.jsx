import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Slider() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_BASE_URL}upcoming?api_key=${
          import.meta.env.VITE_APP_API_KEY
        }`
      )
      .then((res) => setUpcomingMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const sliderStyle = {
    backgroundImage: `url(${import.meta.env.VITE_API_BASE_IMAGE_URL}${
      upcomingMovies[0]?.backdrop_path
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "60vh",
    width: "100%",
  };
  return <div style={sliderStyle}></div>;
}
