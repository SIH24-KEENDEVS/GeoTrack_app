import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HomeScreen = () => {
  const [checkedIn, setCheckedIn] = useState(false);

  const handleCheckInOut = () => {
    setCheckedIn(!checkedIn);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Kriya</Text>
        <Text style={styles.subtitle}>Start your work</Text>
        <Icon name="bell-outline" size={24} color="#fff" />
      </View>

      <View style={styles.attendance}>
        <Text style={styles.attendanceText}>Attendance</Text>
        <Text style={styles.dateText}>Set attendance for 25 April 2023</Text>
      </View>

      <View style={styles.checkInOutContainer}>
        <TouchableOpacity
          style={[
            styles.checkInOutButton,
            { backgroundColor: checkedIn ? "#d9534f" : "#5cb85c" },
          ]}
          onPress={handleCheckInOut}
        >
          <Text style={styles.checkInOutText}>
            {checkedIn ? "Check out" : "Check in"}
          </Text>
        </TouchableOpacity>
        <Text style={styles.timeText}>Monday, 25 April 2023</Text>
        <Text style={styles.timeText}>09:00</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Icon name="clock-outline" size={24} color="#4CAF50" />
          <Text style={styles.footerText}>09:00 Check in</Text>
        </View>
        <View style={styles.footerItem}>
          <Icon name="clock-outline" size={24} color="#d9534f" />
          <Text style={styles.footerText}>18:00 Check out</Text>
        </View>
        <View style={styles.footerItem}>
          <Icon name="clock-outline" size={24} color="#5bc0de" />
          <Text style={styles.footerText}>09hr Total hr</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  welcomeText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#ddd",
    fontSize: 14,
  },
  attendance: {
    backgroundColor: "#2c2c2c",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  attendanceText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  dateText: {
    color: "#bbb",
    fontSize: 14,
  },
  checkInOutContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  checkInOutButton: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  checkInOutText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  timeText: {
    color: "#fff",
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerItem: {
    alignItems: "center",
  },
  footerText: {
    color: "#ddd",
    fontSize: 14,
  },
});

export default HomeScreen;
