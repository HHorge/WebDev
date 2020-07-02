import React from "react";

import { ScrollView } from "react-native";
import Search from "./Search";
import Content from "./Content";
import Sorting from "./Sorting";
import Favorites from "./Favorites";

const Body = () => {
  
  return (
    <ScrollView style={{ height: "90%" }}>
      <Search />
      <Sorting />
      <Content />
      <Favorites />
    </ScrollView>
  );
};

export default Body;
