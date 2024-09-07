import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const attendanceData = [
  {
    date: "Monday 1 April 2023",
    status: "Present",
    checkIn: "09:00",
    checkOut: "18:00",
    totalHr: "09hr",
  },
  {
    date: "Tuesday 2 April 2023",
    status: "Present",
    checkIn: "09:00",
    checkOut: "16:00",
    totalHr: "07hr",
  },
  {
    date: "Tuesday 3 April 2023",
    status: "Present",
    checkIn: "10:00",
    checkOut: "18:00",
    totalHr: "08hr",
  },
  {
    date: "Wednesday 4 April 2023",
    status: "Absent",
    checkIn: "00:00",
    checkOut: "00:00",
    totalHr: "00hr",
  },
  {
    date: "Thursday 5 April 2023",
    status: "Absent",
    checkIn: "00:00",
    checkOut: "00:00",
    totalHr: "00hr",
  },
];

const AttendanceReport = ({navigation}) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.dateText}>{item.date}</Text>
        <Text
          style={[
            styles.statusText,
            { color: item.status === "Present" ? "#4CAF50" : "#d9534f" },
          ]}
        >
          {item.status}
        </Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.labelText}>Check in</Text>
          <Text style={styles.valueText}>{item.checkIn}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.labelText}>Check out</Text>
          <Text style={styles.valueText}>{item.checkOut}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.labelText}>Total hr</Text>
          <Text style={styles.valueText}>{item.totalHr}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-left" size={24} color="#fff" />
        <Text style={styles.headerTitle}>Attendance report</Text>
      </View>
      <FlatList
        data={attendanceData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <View style={styles.monthSelector}>
            <Icon name="chevron-left" size={24} color="#fff" />
            <Text style={styles.monthText}>September 2024</Text>
            <Icon name="chevron-right" size={24} color="#fff" />
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    paddingHorizontal: 16,
    paddingTop: 45,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  monthSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 10,
  },
  monthText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#2c2c2c",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  column: {
    alignItems: "center",
  },
  divider: {
    borderBottomColor: "#444",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  dateText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  statusText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  labelText: {
    color: "#bbb",
    fontSize: 14,
  },
  valueText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default AttendanceReport;
