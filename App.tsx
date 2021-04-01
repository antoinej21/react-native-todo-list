import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksSection}>
        <Text style={styles.title}>Todo today</Text>
        <View>
          <Task text="💪 Work out 30 minutes"></Task>
          <Task text="🏠 Ace the react native test"></Task>
          <Task text="🍸 Chill out"></Task>
        </View>
      </View>
      <KeyboardAvoidingView style={styles.bottom}>
        <TextInput style={styles.input} placeholder="Add a task"></TextInput>
        <TouchableOpacity style={styles.add}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#8C82FF",
  },
  tasksSection: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },
  input: {
    borderRadius: 60,
    marginBottom: 37,
    paddingVertical: 15,
    marginHorizontal: 20,
    backgroundColor: "#FFF",
    textAlign: "center",
    width: "90%",
  },
  bottom: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  add: {
    borderRadius: 60,
    height: 60,
    width: 60,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 29,
  },
  addText: {
    fontSize: 60,
    marginTop: -10,
    color: "#55BCF6",
  },
});
