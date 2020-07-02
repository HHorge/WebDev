import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RadioForm from "react-native-simple-radio-button";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideMenu, filter } from "../actions";

const genres = [
  { label: "All", value: "" },
  { label: "Akevitt", value: "Akevitt" },
  { label: "Bitter", value: "Bitter" },
  { label: "Druebrennevin", value: "Druebrennevin" },
  { label: "Gin", value: "Gin" },
  { label: "Hvitvin", value: "Hvitvin" },
  { label: "Likør", value: "Likør" },
  { label: "Portvin", value: "Portvin" },
  { label: "Rødvin", value: "Rødvin" },
  { label: "Vodka", value: "Vodka" },
  { label: "Whisky", value: "Whisky" }
];

const Filtering = () => {
  const stateType = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const styles = StyleSheet.create({
    headerText: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      paddingBottom: 30
    }
  });

  function updateFilter(e) {
    dispatch(filter(e));
  }

  function onButtonPress(v) {
    updateFilter(v);
    dispatch(toggleSideMenu());
  }
  function indexOfGenre(value) {
    for (let i = 0; i < genres.length; i++) {
      if (value === genres[i].value) {
        return i;
      }
    }
    return 0;
  }

  return (
    <View
      style={{
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 30
      }}
    >
      <Text style={styles.headerText}>Kategorier</Text>
      <RadioForm
        radio_props={genres}
        onPress={value => onButtonPress(value)}
        initial={indexOfGenre(stateType)}
        outerColor="#31708e"
        innerColor="#31708e"
      />
    </View>
  );
};

export default Filtering;
