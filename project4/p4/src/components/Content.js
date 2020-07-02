import React from "react";
import { Text, View, Button } from "react-native";

import { ListItem } from "react-native-elements";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { details, nextPage } from "../actions";
import Details from "./Details";
import { isOverlayVisible } from "../actions";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_PRODUCTS = gql`
  query Products(
    $limit: Int
    $sort: String
    $search: String
    $filters: FilterInputObject
    $skip: Int
  ) {
    products(
      limit: $limit
      sort: $sort
      search: $search
      filters: $filters
      skip: $skip
    ) {
      products {
        name
        price
        img
        id
        alcohol
        volume
        type
        country
        district
        pricePerLiter
      }
    }
  }
`;

const Content = () => {
  const dispatch = useDispatch();
  const stateSearch = useSelector(state => state.search);
  const stateType = useSelector(state => state.filter);
  const stateSort = useSelector(state => state.sortingCategory);
  const statePage = useSelector(state => state.page);

  function checkStateTypeEmpty() {
    let isStateTypeEmpty = stateType == "";
    return isStateTypeEmpty ? {} : { filterType: stateType };
  }

  // This is the constant which fetches from the database. useQuery with apollo-hooks.
  const { loading, error, data, fetchMore } = useQuery(GET_PRODUCTS, {
    variables: {
      limit: 15,
      search: stateSearch,
      sort: stateSort,
      filters: checkStateTypeEmpty()
    }
  });
  if (loading) return <Text>Loading ...</Text>;
  if (error) return <Text>{error}</Text>;
  const { products } = data.products;

  // Function for loading more from the database. Is called when Load more button is pressed.
  const handleLoadMore = () => {
    dispatch(nextPage());
    fetchMore({
      variables: {
        skip: products.length
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult;
        return {
          products: {
            products: [
              ...previousResult.products.products,
              ...fetchMoreResult.products.products
            ],
            totalCound: previousResult.products.totalCount,
            __typename: "ProductsResult"
          }
        };
      }
    });
  };

  // Rendering of list elements.
  const productElements = products.map(product => (
    <View key={product.id} style={{ display: "flex" }}>
      <ListItem
        key={product.id}
        leftAvatar={{ source: { uri: product.img } }}
        title={product.name}
        subtitle={"Kr " + product.price}
        bottomDivider
        chevron
        onPress={() => setOverlayState(product)}
      />
    </View>
  ));

  function setOverlayState(d) {
    dispatch(isOverlayVisible());
    dispatch(details(d));
  }

  // Show more button is only visible when needed.
  function showMoreButton() {
    if (products.length === 15 + 15 * statePage) {
      return (
        <Button
          color="#5085a5"
          title="Load more"
          onPress={() => handleLoadMore()}
        />
      );
    }
  }

  return (
    <View>
      {productElements}
      {showMoreButton()}
      <Details />
    </View>
  );
};

export default Content;
