import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
export const AlbumContext = createContext();
export const AlbumProvider = (props) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchAlbums() {
      await axios
        .get("https://jsonplaceholder.typicode.com/albums")
        .then((res) => {
          setAlbums(res.data);
        });
    }

    fetchAlbums();
  }, []);

  return (
    <AlbumContext.Provider value={[albums]}>
      {props.children}
    </AlbumContext.Provider>
  );
};
