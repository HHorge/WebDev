import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isOverlayVisible, dataRetriever } from "../actions";
import { Text, View, Image, StyleSheet, AsyncStorage } from "react-native";
import { Button, Overlay } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const Details = () => {
  const stateOverlay = useSelector(state => state.overlay);
  const details = useSelector(state => state.details);
  const dispatch = useDispatch();
  const [color, setColor] = useState("red");

  // Function for setting liked product in AsyncStorage. First used as color-changer - later only used to set the favorite.
  function like() {
    AsyncStorage.getItem(details.id).then(result =>
      dispatch(dataRetriever(result))
    );
    if (dataRetriever === details.name) {
      AsyncStorage.removeItem(details.name);
      _retrieveData();
      setColor("gray");
    } else {
      _storeData();
      setColor("red");
    }
  }

  _storeData = async () => {
    try {
      await AsyncStorage.setItem(details.name, JSON.stringify(details.name));
    } catch (error) {
      // Error saving data
    }
  };

  return (
    <Overlay
      height="auto"
      isVisible={stateOverlay}
      onBackdropPress={() => dispatch(isOverlayVisible())}
    >
      <View style={styles.container}>
        <Text style={styles.name}>{details.name}</Text>
        <Image style={styles.image} source={{ uri: details.img }} />
        <Text style={styles.price}>Kr. {details.price}</Text>
        <Text style={styles.type}>{details.type}</Text>
        <View style={styles.info}>
          <Text style={styles.alcohol}>
            Alcohol:<Text style={styles.elements}> {details.alcohol}% </Text>
          </Text>
          <Text style={styles.volume}>
            Volume:<Text style={styles.elements}> {details.volume}</Text>
          </Text>
        </View>
        <Text style={styles.country}>
          Country:<Text style={styles.elements}> {details.country}</Text>
        </Text>
        <Button
          icon={<Icon name="heart" size={40} color={color} />}
          type="clear"
          iconRight
          onPress={() => like()}
        />
      </View>
    </Overlay>
  );
};

// Styling needed for detailview
const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 10,
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "column"
  },
  name: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  price: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 17
  },
  info: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  alcohol: {
    width: "60%",
    paddingLeft: 5
  },
  volume: {
    width: "40%",
    paddingRight: 5
  },

  type: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: "90%",
    textAlign: "center",
    paddingBottom: 15,
    paddingTop: 5,
    marginBottom: 20
  },

  image: {
    resizeMode: "contain",
    height: 200,
    width: 100,
    justifyContent: "center"
  },
  elements: {
    fontWeight: "bold"
  },
  country: {
    paddingBottom: 10
  }
});

export default Details;
