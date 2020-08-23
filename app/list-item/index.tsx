import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

interface ListItemProps {
  listItem: string;
}

export default function ListItem({ listItem }: ListItemProps) {
  const unchecked = "check-circle-outline";
  const checked = "checkbox-blank-circle-outline";
  const [checkBoxState, setCheckBoxState] = useState(unchecked);

  function handleCheckBoxPress() {
    console.log("I AM BEING EXECUTED");
    if (checkBoxState === unchecked) {
      setCheckBoxState(checked);
    } else {
      setCheckBoxState(unchecked);
    }
  }

  return (
    <TouchableWithoutFeedback style={styles.test} onPress={handleCheckBoxPress}>
    <View style={styles.listItemContainer}>
      <MaterialCommunityIcons
        style={styles.icon}
        name={checkBoxState}
        size={28}
        color="white"
      />
      <Text style={styles.listItem}>{listItem}</Text>
    </View>
  </TouchableWithoutFeedback>
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
