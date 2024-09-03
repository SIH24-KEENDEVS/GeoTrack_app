import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import React,{useEffect,useState} from 'react';


import { StyleSheet, Text, View ,ImageBackground} from 'react-native';

export default function App() {
  const [hasPermission, setHasPermission] = useState(false);
  const [location,setLocation]=useState({coords:{latitude:0,longitude:0}})






  async function locationCheck(){
    let sta=await Location.requestForegroundPermissionsAsync()
    if (sta.status!=="granted"){
      console.log("please grant location permission to get your attendence")
    }
    setHasPermission(true)  
  }









  
  useEffect(()=>{
    locationCheck()})


  async function  getLocation(){
      const current_loc= await Location.getCurrentPositionAsync({})
      setLocation(await current_loc)
      try{
        text = await location;
        // console.log(text)
        if (!text){

          console.log("nothing is there to show")
        }
        console.log(text.coords.latitude)
      }
      catch(error){
        console.log(error)
      }
    }  
    getLocation()
    
  return (
    <>
    <ImageBackground source=
    {require("./assets/back.jpg")} resizeMode="cover" style={styles.back_image} > 
     
     <StatusBar 
      backgroundColor={"blue"}
      barStyle={"light-content"}
      hidden={false}></StatusBar>
    <View style={styles.container}>
      <Text style={styles.text_prop}>HELLO FROM GEOTRACK!</Text>
    
    </View>
    </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  back_image:{
    flex:1,
  },
  text_prop:{
    color:"white"
  },
  container: {
    flex: 1,
    color:"white",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
