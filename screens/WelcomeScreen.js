import * as React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/little-lemon-logo.png")}
          alt="logo"
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.motto}>
          <Text style={styles.mottoText}>
            Little Lemon, your local Mediterrenean Bistro
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#495E57",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom:10
  },
  buttonText: { color: "white" },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    position: "relative",
  },
  image: {
    width: 150,
    height: 150,
    position: "absolute",
    top: 100,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 50,
    backgroundColor: "yellow",
  },
  motto: {
    position: "absolute",
    top: 270,
  },
  mottoText: {
    fontWeight: "bold",
    fontSize: 16,
    width: 250,
    textAlign: "center",
  },
});
export default WelcomeScreen;
