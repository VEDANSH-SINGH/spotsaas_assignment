import React from "react";
import "./HomeGrid.css";
import AlbumList from "./AlbumList/AlbumList";
import UserAlbum from "./UserAlbum/UserAlbum";
import UserList from "./UserList/UserList";
import PhotoList from "./PhotoList/PhotoList";
import { AlbumProvider } from "../AlbumContext";
import { PhotoProvider } from "../PhotoContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function HomeGrid() {
  return (
    <div className="homegrid">
      <div className="homegrid__title">
        <h1>Relive Your Experiences</h1>
      </div>
      <div className="grid__container">
        <PhotoProvider>
          <AlbumProvider>
            <Router>
              <Switch>
                <Route path="/" exact>
                  <AlbumList />
                  <UserList />
                </Route>

                <Route path="/albums/:id">
                  <PhotoList></PhotoList>
                  <UserList />
                </Route>
                <Route path="/users/:id">
                  <UserAlbum></UserAlbum>
                </Route>
              </Switch>
            </Router>
          </AlbumProvider>
        </PhotoProvider>
      </div>
    </div>
  );
}

export default HomeGrid;
