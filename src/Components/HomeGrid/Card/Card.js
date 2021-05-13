import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
function Albums(props) {
  return (
    <div className="albums">
      <div className="albums__cardwrapper">
        <div className="albums__image">
          <img src={props.src} alt="Album_thumbnail"></img>
        </div>
        <div className="albums__credentials">
          <Link to={`users/${props.userid}`} className="link">
            <div className="albums__credentials__userid">
              Uploaded By - <span>User {props.userid}</span>
            </div>
          </Link>

          <div className="albums__credentials__title">{props.title}</div>
        </div>
      </div>
    </div>
  );
}

export default Albums;
