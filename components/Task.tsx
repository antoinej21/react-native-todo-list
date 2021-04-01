import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props: { text: string }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingTop: 19,
    paddingBottom: 19,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  square: {
    height: 24,
    width: 24,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5,
    backgroundColor: "rgba(47, 105, 255, 0.4)",
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    height: 12,
    width: 12,
    borderWidth: 1,
    borderColor: "#2F69FF",
    borderRadius: 6,
    marginRight: 21,
  },
});

export default Task;
