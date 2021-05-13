import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
export const PhotoContext = createContext();
export const PhotoProvider = (props) => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    async function fetchPhotos() {
      await axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((res) => {
          setPhotos(res.data);
        });
    }
    fetchPhotos();
  }, []);

  return (
    <PhotoContext.Provider value={photos}>
      {props.children}
    </PhotoContext.Provider>
  );
};
