import React, { useContext, useState } from "react";
import { useLocation } from "react-router";
import { PhotoContext } from "../../PhotoContext";
import Card from "../Card/Card";
import ReactPaginate from "react-paginate";

function PhotoList(props) {
  const location = useLocation();
  const photoList = useContext(PhotoContext);
  const id = Number(location.pathname.substr(8));
  const reqPhotoList = photoList.filter((photo) => {
    return photo.albumId === id;
  });
  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 3;
  const offset = currentPage * PER_PAGE;
  const currentphotos = reqPhotoList.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(reqPhotoList.length / PER_PAGE);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return (
    <div className="photolist">
      {currentphotos.map((photo) => {
        return (
          <Card
            userid={photo.userId}
            title={photo.title}
            src={photo.url}
            key={photo.id}
          ></Card>
        );
      })}
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

export default PhotoList;
