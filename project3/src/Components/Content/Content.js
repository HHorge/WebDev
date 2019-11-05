import React from "react";
import { useSelector } from "react-redux";
import "./Content.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { details, nextPage, prevPage } from "../../actions";

function Content() {
  // State management and declarations.
  const dispatch = useDispatch();
  const stateAlbums = useSelector(state => state.albums);
  const stateSearch = useSelector(state => state.search);
  const stateGenre = useSelector(state => state.filter);
  const statePage = useSelector(state => state.page);

  // Filtering of albums from the database. Checks to see if input in stateSearch matches either album, artist or year.
  function filterAlbums() {
    let filteredAlbums = [];
    for (let a in stateAlbums) {
      if (
        stateAlbums[a]["Album"]
          .toLowerCase()
          .indexOf(stateSearch.toLowerCase()) !== -1
      ) {
        filteredAlbums.push(stateAlbums[a]);
      } else if (
        stateAlbums[a]["Artist"]
          .toLowerCase()
          .indexOf(stateSearch.toLowerCase()) !== -1
      ) {
        filteredAlbums.push(stateAlbums[a]);
      } else if (
        stateAlbums[a]["Year"]
          .toLowerCase()
          .indexOf(stateSearch.toLowerCase()) !== -1
      ) {
        filteredAlbums.push(stateAlbums[a]);
      }
    }

    return filteredAlbums;
  }

  // Takes a list and filter for genre. Checks genre in state and compares to the albums in the list. THe list is returned with jsx-friendly output.
  function genreFilter(albums) {
    let f = [];
    for (let a in albums) {
      if (albums[a]["Genre"] === stateGenre || stateGenre === "") {
        f.push(
          <Link to="/details" onClick={() => setDetailState(albums[a])}>
            <li className="e">
              {albums[a]["Album"]}
              <li className="sub">{albums[a]["Artist"]}</li>
            </li>
          </Link>
        );
      }
    }
    return f;
  }

  function setDetailState(album) {
    dispatch(details(album));
  }

  function setPageState(a) {
    if (a === "+") {
      dispatch(nextPage());
    } else {
      dispatch(prevPage());
    }
  }

  // The previous button only renders if the next-button is clicked.
  function renderPrevButton() {
    if (statePage > 0) {
      return (
        <button className="nav" onClick={() => setPageState("-")}>
          {"<"}
        </button>
      );
    }
  }

  // The next button only renders if there are more objects in the list on the next page.
  function renderNextButton() {
    if ((statePage + 1) * 24 < genreFilter(filterAlbums()).length) {
      return (
        <button className="nav" onClick={() => setPageState("+")}>
          >
        </button>
      );
    }
  }

  // Slice is used to render only 25 albums per page.
  return (
    <div>
      {/* //Button for wordcloud. Does not function yet */}
      <Link to="/Wordcloud">
        <button className="wcButton">
          Wordcloud
        </button> 
      </Link>
      <ul className="resultList">
        {genreFilter(filterAlbums()).slice(
          statePage * 24,
          (statePage + 1) * 24
        )}
      </ul>
      <div className="navigate">
        {renderPrevButton()}
        {renderNextButton()}
      </div>
    </div>
  );
}

export default Content;
