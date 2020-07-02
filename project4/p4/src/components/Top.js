import React from "react";
import { Header } from "react-native-elements";
import { useDispatch } from "react-redux";
import { toggleSideMenu } from "../actions";
import { dataOverlay } from "../actions";

const Top = () => {
  const dispatch = useDispatch();
  onHamburgerClick = () => {
    dispatch(toggleSideMenu());
  };

  return (
    <Header
      leftComponent={{
        icon: "menu",
        color: "#fff",
        onPress: () => onHamburgerClick()
      }}
      rightComponent={{
        icon: "star",
        color: "#fff",
        onPress: () => dispatch(dataOverlay())
      }}
      centerComponent={{ text: "Drinks", style: { color: "#fff" } }}
      backgroundColor="#31708e"
      containerStyle={{ borderBottomWidth: 0 }}
    />
  );
};

export default Top;
