import React, { Component } from "react";
import { View } from "react-native";
import Body from "./src/components/Body";
import Top from "./src/components/Top";
import { createStore } from "redux";
import allReducer from "./src/reducers";
import { Provider } from "react-redux";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import SideMenu from "./src/components/SideMenu";

const client = new ApolloClient({
  uri: "http://it2810-26.idi.ntnu.no:4000"
});

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.disableYellowBox = true;
export default class App extends Component {
  render() {
    return (
      <View>
        {/*<Text style={styles.instructions}>{instructions}</Text>*/}
        <Provider store={store}>
          <ApolloProvider client={client}>
            <Top />
            <SideMenu />
            <Body />
          </ApolloProvider>
        </Provider>
      </View>
    );
  }
}
