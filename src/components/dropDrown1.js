import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

// import { stationListEN } from "../constants";
import {sampleRate} from "../constants"
import { CheckIcon } from "react-native-heroicons/solid";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";


const DropdownComponent1 = ({ setStation }) => {
  const [value, setValue] = useState(null);

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <CheckIcon
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      autoScroll={false}

      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={sampleRate}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Choose sample rate..."
      searchPlaceholder="Search..."
      value={value}
      onChange={(item) => {
        setValue(item.value);
        setStation(item.code);
      }}
      renderLeftIcon={() => (
        <MagnifyingGlassIcon style={styles.icon} size={20} color="black" />
      )}
      renderItem={renderItem}
    />
  );
};

export default DropdownComponent1;

const styles = StyleSheet.create({
  dropdown: {
    margin: 2,
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    borderColor: "red",
    borderStyle: "solid",
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
