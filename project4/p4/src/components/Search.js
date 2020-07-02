import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { search, defaultPage } from "../actions";
import { SearchBar } from "react-native-elements";

const Search = () => {
  const dispatch = useDispatch();
  const stateSearch = useSelector(state => state.search);

  function updateSearch(e) {
    dispatch(search(e.substr(0, 20)));
    dispatch(defaultPage());
  }
  //SEARCH FIELD
  return (
    // Searchbar
    <SearchBar
      placeholder="Type Here..."
      onChangeText={e => updateSearch(e)}
      value={stateSearch}
      inputContainerStyle={{ backgroundColor: "#5085a5" }}
      inputStyle={{ color: "#fff" }}
      searchIcon={{ color: "#fff" }}
      clearIcon={{ color: "#fff" }}
      placeholderTextColor="#fff"
      containerStyle={{
        backgroundColor: "#31708e",
        borderBottomColor: "transparent",
        borderTopColor: "transparent"
      }}
    />
  );
};

export default Search;
