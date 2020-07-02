//import { SideMenu, List, ListItem } from 'react-native-elements';
import { useSelector, useDispatch } from "react-redux";
import { Overlay } from "react-native-elements";
import Filtering from "./Filtering";
import React from "react";
import { toggleSideMenu } from "../actions";

const SideMenu = () => {
  const dispatch = useDispatch();
  const stateSideMenu = useSelector(state => state.sideMenu);

  return (
    <Overlay
      height="auto"
      isVisible={stateSideMenu}
      onBackdropPress={() => dispatch(toggleSideMenu())}
    >
      <Filtering />
    </Overlay>
  );
};

export default SideMenu;
