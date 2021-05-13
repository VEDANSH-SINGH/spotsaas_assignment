import React, { useContext } from "react";
import { AlbumContext } from "../../AlbumContext";
import "./UserList.css";
import { Link } from "react-router-dom";

function UserList() {
  const [albums] = useContext(AlbumContext);
  let users = [];
  albums.forEach((album) => {
    users = [...users, album.userId];
  });
  users = users.filter((c, index) => {
    return users.indexOf(c) === index;
  });

  return (
    <div className="userlist">
      <div className="userlist__title">
        <h3>Active Users</h3>
      </div>

      {users.map((user) => {
        return (
          <Link key={user} to={`users/${user}`} className="link">
            <div className="userlist__item" key={user}>
              User {user}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default UserList;
