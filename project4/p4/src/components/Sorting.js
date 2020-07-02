import React from "react";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { sortingCategory } from "../actions";
import { Chevron } from "react-native-shapes";
import RNPickerSelect, { defaultStyles } from "react-native-picker-select";

const Sorting = () => {
  const dispatch = useDispatch();
  const placeholder = {
    label: "Sorter...",
    value: null,
    color: "#9EA0A4"
  };

  const sortingAlternatives = [
    {
      label: "Navn",
      value: "name"
    },
    {
      label: "Pris - Stigende",
      value: "price"
    },
    {
      label: "Pris - Synkende",
      value: "-price"
    },
    {
      label: "Alkoholprosent - Stigende",
      value: "alcohol"
    },
    {
      label: "Alkoholprosent - Synkende",
      value: "-alcohol"
    },
    {
      label: "Volum - Stigende",
      value: "volume"
    },
    {
      label: "Volum - Synkende",
      value: "-volume"
    }
  ];
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      backgroundColor: "#5085a5",
      color: "black",
      paddingRight: 30 // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      backgroundColor: "#f0f8ff",
      borderBottomColor: "#687864",
      color: "black",
      paddingRight: 30 // to ensure the text is never behind the icon
    }
  });

  return (
    <RNPickerSelect
      placeholder={placeholder}
      items={sortingAlternatives}
      onValueChange={value => dispatch(sortingCategory(value))}
      style={{
        ...pickerSelectStyles,
        iconContainer: {
          top: 20,
          right: 12
        }
      }}
      useNativeAndroidPickerStyle={false}
      //textInputProps={{ underlineColorAndroid: 'cyan' }}
      Icon={() => {
        return <Chevron size={1.5} color="#5085a5" />;
      }}
    />
  );

  // https://www.npmjs.com/package/react-native-picker-select
};
export default Sorting;
