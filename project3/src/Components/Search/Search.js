import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { search, defaultPage } from "../../actions";
import "./Search.css";

function Search() {
  const dispatch = useDispatch();
  const stateSearch = useSelector(state => state.search);

  function updateSearch(e) {
    dispatch(search(e.substr(0, 20)));
    dispatch(defaultPage());
  }
//SEARCH FIELD
  return (
    // Searchbar
    <div>
      <div class="searchWrap">
        <div class="search">
          <input
            type="text"
            class="searchBox"
            name="search"
            placeholder="Search..."
            value={stateSearch}
            onChange={e => updateSearch(e.target.value)}
          />
          <button type="submit" class="searchButton">
            <i class="fas fa-search"></i>
          </button>
        </div>
        </div>
    </div>
  );
}

export default Search;
