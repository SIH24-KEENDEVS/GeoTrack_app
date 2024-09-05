import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Profile</Text>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }} // Placeholder image URL
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Kriya Russell</Text>
        <Text style={styles.profileEmail}>kriyarussell@mail.com</Text>
      </View>

      <View style={styles.menuContainer}>
        <MenuItem icon="account-edit" text="Edit profile" />
        <MenuItem icon="calendar-check" text="Attendance report" />
        <MenuItem icon="phone" text="Contact us" />
        <MenuItem icon="logout" text="Logout" />
      </View>
    </View>
  );
};

const MenuItem = ({ icon, text }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuItemContent}>
      <Icon name={icon} size={24} color="#fff" />
      <Text style={styles.menuText}>{text}</Text>
    </View>
    <Icon name="chevron-right" size={24} color="#fff" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    paddingHorizontal: 16,
    paddingTop: 45,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  profileEmail: {
    color: "#bbb",
    fontSize: 14,
  },
  menuContainer: {
    marginTop: 10,
    backgroundColor: "#2c2c2c",
    borderRadius: 8,
    gap: 10,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  menuItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
});

export default UserProfile;
