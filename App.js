import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import HomeScreen from "./Home";
import Records from "./Records";
import Myroute from "./Myroute";
import { StyleSheet } from "react-native";
import HomeScreen2 from "./Home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import AttendanceReport from "./AttendanceReport";

const Screen = createBottomTabNavigator();
export default function App() {
  const local_coords = { latitude: 0, longitude: 0 }; // isko manually ek fixed position ka dalana
  const [hasPermission, setHasPermission] = useState(false);
  const [location, setLocation] = useState({
    coords: { latitude: 0, longitude: 0 },
  });

  // async function locationCheck() {
  //   let sta = await Location.requestForegroundPermissionsAsync();
  //   if (sta.status !== "granted") {
  //     console.log("please grant location permission to get your attendence");
  //   }

  //   setHasPermission(true);
  // }
  // function CalculateDistance(lat1, lon1, lat2, lon2) {
  //   const toRad = (value) => (value * Math.PI) / 180;
  //   const R = 6371; // Radius of the Earth in km
  //   const dLat = toRad(lat2 - lat1);
  //   const dLon = toRad(lon2 - lon1);
  //   const a =
  //     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  //     Math.cos(toRad(lat1)) *
  //       Math.cos(toRad(lat2)) *
  //       Math.sin(dLon / 2) *
  //       Math.sin(dLon / 2);
  //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  //   return R * c * 1000;
  // }

  // useEffect(() => {
  //   locationCheck();
  // });

  // async function getLocation() {
  //   const current_loc = await Location.getCurrentPositionAsync({});
  //   setLocation(await current_loc);
  //   try {
  //     text = await location;
  //     // console.log(text)
  //     if (!text) {
  //       console.log("nothing is there to show");
  //     }
  //     // console.log( text.coords.latitude,  text.coords.longitude)

  //     // console.log(final)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // getLocation();
  // final = CalculateDistance(
  //   local_coords.latitude,
  //   local_coords.longitude,
  //   location.coords.latitude,
  //   location.coords.longitude
  // );
  // console.log(final);
  // if (final > 200) {
  //   console.log("You are away than 200m range");
  // } else {
  //   console.log("You are in  200m range");
  // }

  return (
    <>
      {/* ImageBackground ko remove kar diya h... */}
      {/* <ImageBackground
        source={require("./assets/back.jpg")}
        resizeMode="cover"
        style={styles.back_image}
      >
        <StatusBar
          backgroundColor={"blue"}
          barStyle={"light-content"}
          hidden={false}
        ></StatusBar>
        <View style={styles.container}>
          <Text style={styles.text_prop}>HELLO FROM GEOTRACK!</Text>
        </View>
      </ImageBackground> */}

      {/* Ye Main Screen ka Component h */}

      <NavigationContainer>
        <Screen.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: "#e91e63",
            headerShown: false,
          }}
        >
          <Screen.Screen
            name="Home"
            component={HomeScreen2}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          />
          <Screen.Screen
            name="Records"
            component={AttendanceReport}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="calendar" size={size} color={color} />
              ),
            }}
          />
          <Screen.Screen
            name="Location"
            component={Myroute}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="location" size={size} color={color} />
              ),
            }}
          />
        </Screen.Navigator>
      </NavigationContainer>
      {/* <HomeScreen2 /> */}
    </>
  );
}

const styles = StyleSheet.create({
  back_image: {
    flex: 1,
  },
  text_prop: {
    color: "white",
  },
  container: {
    flex: 1,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
