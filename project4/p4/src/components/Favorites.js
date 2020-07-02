import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { data, dataOverlay } from "../actions";
import { Text, ScrollView, Button, AsyncStorage } from "react-native";
import { Overlay } from "react-native-elements";

const Favorites = () => {
  const dispatch = useDispatch();
  const stateData = useSelector(state => state.data);
  const stateDataOverlay = useSelector(state => state.dataOverlay);

  // Retrieved all keys in Asyncstorage.
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getAllKeys();
      if (value !== null) {
        // We have data!!
        dispatch(data(value));
      }
    } catch (error) {
      // Error retrieving data
      console.log("error");
    }
  };

  // Displays info in Asyncstorage for the user.
  function showData() {
    return stateData.map(f => <Text>{f}</Text>);
  }

  _retrieveData();
  return (
    <Overlay
      height="auto"
      isVisible={stateDataOverlay}
      onBackdropPress={() => dispatch(dataOverlay())}
    >
        <Text style={{ fontSize: 20, textAlign:'center' }}>Favorites</Text>
      <ScrollView style={{ textAlign: "center", margin: 5 }}>
        {showData()}
      </ScrollView>
      <Button
        title="Clear"
        onPress={() => AsyncStorage.clear()}
        color="#31708e"
      />
    </Overlay>
  );
};

export default Favorites;
