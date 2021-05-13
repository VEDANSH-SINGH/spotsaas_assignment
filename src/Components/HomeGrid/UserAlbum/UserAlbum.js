import React, { useContext } from "react";
import { AlbumContext } from "../../AlbumContext";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { PhotoContext } from "../../PhotoContext";

function UserAlbum() {
  const [albums] = useContext(AlbumContext);
  const photos = useContext(PhotoContext);
  const location = useLocation();
  const id = Number(location.pathname.substr(7));
  function userAlbumfinder(user) {
    user = Number(user);
    let userAlbum = [];
    if (user === 0) {
      userAlbum = albums;
    } else {
      userAlbum = albums.filter((album) => {
        return album.userId === user;
      });
    }
    return userAlbum;
  }

  let userAlbum = userAlbumfinder(id);

  return (
    <div>
      {userAlbum.map((album) => {
        let reqphoto = "";
        for (let i = 0; i < photos.length; i++) {
          if (photos[i].albumId === album.id) {
            reqphoto = photos[i].url;
            break;
          }
        }
        return (
          <Link key={albums.id} to={`albums/${album.id}`} className="link">
            <Card
              title={album.title}
              userid={album.userId}
              src={reqphoto}
              key={album.id}
            ></Card>
          </Link>
        );
      })}
    </div>
  );
}

export default UserAlbum;
