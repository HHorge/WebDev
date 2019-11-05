import { useDispatch } from "react-redux";
import { albums } from "../../actions";
import React from 'react';

function DataFetcher() {
  const dispatch = useDispatch();

  function fetchAlbums() {
    fetch("http://it2810-08.idi.ntnu.no:5000/albums")
      .then(res => res.json())
      .then(a => dispatch(albums(a)));
      
  }

  fetchAlbums();
  return null;
}

export default DataFetcher;
