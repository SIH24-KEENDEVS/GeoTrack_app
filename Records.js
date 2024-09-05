import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const MyScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Records</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="time" size={32} color="green" />
            <Text style={styles.buttonText}>Hours Worked</Text>
            <Text style={styles.buttonText}>5hrs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="newspaper" size={32} color="green" />

            <Text style={styles.buttonText}>Attendence</Text>
            <Text style={styles.buttonText}>50% this month</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="walk-sharp" size={34} color="green" />
            <Text style={styles.buttonText}>Distance Covered</Text>
            <Text style={styles.buttonText}>50kms</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="map-sharp" size={32} color="green" />

            <Text style={styles.buttonText}>See routes</Text>
            <Text style={styles.buttonText}>My route</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 10,
  },
  header: {
    backgroundColor: "#121212",
    padding: 20,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#FFFFFF",
    padding: 25,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#121212",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default MyScreen;
