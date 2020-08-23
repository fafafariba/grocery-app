import { StatusBar } from "expo-status-bar";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";

interface ListItemProps {
  listItemName: string;
}

export function ListItem({ listItemName }: ListItemProps) {
  const firstRender = true;
  const unchecked = "checkbox-blank-circle-outline";
  const checked = "check-circle-outline";
  const [checkBoxState, setCheckBoxState] = useState(unchecked);

  function handleCheckBoxPress() {
    if (checkBoxState === unchecked) {
      setCheckBoxState(checked);
    } else {
      setCheckBoxState(unchecked);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handleCheckBoxPress}>
      <View style={styles.listItemContainer}>
        <MaterialCommunityIcons
          style={styles.icon}
          name={checkBoxState}
          size={28}
          color="white"
        />
        <Text style={styles.listItem}>{listItemName}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default function App() {
  const items = ["Sabzi", "Lemon Almonds"];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My List</Text>
      {items.map((item: string, idx: number) => (
        <ListItem listItemName={item} key={`${item}-${idx}`} />
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#888",
    paddingTop: 80,
    paddingHorizontal: 32,
    paddingBottom: 32,
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  test: {
    backgroundColor: "red",
  },
  icon: {
    marginRight: 12,
  },
  title: {
    color: "white",
    fontSize: 48,
    fontFamily: "Cochin",
    marginBottom: 16,
  },
  listItem: {
    color: "white",
    fontSize: 32,
    fontFamily: "Cochin",
  },
});
