import React, { useContext, useState } from "react";
import { AlbumContext } from "../../AlbumContext";
import { PhotoContext } from "../../PhotoContext";
import "./AlbumList.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

function AlbumList() {
  const [albums] = useContext(AlbumContext);
  const photos = useContext(PhotoContext);
  const [isOpen, setOpen] = useState(false);
  const [sort, setSort] = useState();

  const [selectedItem, setSelectedItem] = useState(null);
  let users = [];
  albums.forEach((album) => {
    users = [...users, album.userId];
  });
  users = users.filter((c, index) => {
    return users.indexOf(c) === index;
  });
  const items = [...users];
  const toggleDropdown = () => setOpen(!isOpen);
  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
    toggleDropdown();
  };
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
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
  const sortAscend = () => {
    userAlbum.sort((a, b) => b.id - a.id);
    setSort("Ascend");
  };
  const sortDescend = () => {
    userAlbum.sort((a, b) => a.id - b.id);
    setSort("Descend");
  };
  let userAlbum = userAlbumfinder(selectedItem);

  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 6;
  const offset = currentPage * PER_PAGE;
  const currentalbums = userAlbum.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(userAlbum.length / PER_PAGE);

  return (
    <div className="albumlist_wrapper">
      <div className="albumlist__buttons">
        <div>
          <button className="albumlist__button" onClick={sortAscend}>
            Sort Descend
          </button>
          <button className="albumlist__button" onClick={sortDescend}>
            Sort Ascend
          </button>
        </div>

        <div className="dropdown">
          <div className="dropdown-header" onClick={toggleDropdown}>
            {selectedItem
              ? ` User ${items.find(
                  (item) => Number(item) === Number(selectedItem)
                )}`
              : "Filter User"}
            <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
          </div>
          <div className={`dropdown-body ${isOpen && "open"}`}>
            {items.map((item) => (
              <div
                className="dropdown-item"
                onClick={(e) => handleItemClick(e.target.id)}
                id={item}
                key={item}
              >
                <span
                  className={`dropdown-item-dot ${
                    Number(item) === Number(selectedItem) && "selected"
                  }`}
                >
                  •
                </span>
                User {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="albumlist">
        {currentalbums.map((album) => {
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
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
}

export default AlbumList;
