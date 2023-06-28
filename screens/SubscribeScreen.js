import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import { validateEmail } from "../utils";
const SubscribeScreen = () => {
  const [email, setEmail] = React.useState("");
  const [valid, setValid] = React.useState(false);
  const handleEmail = () => { 
   if (validateEmail(email)) {
     console.log(email);
     Alert.alert("Thank you for subscribing. Stay tuned!!!");
     setEmail("");
     setValid(false); // Reset the validation state when the email is valid
   } else {
     setValid(true); // Set the validation state to true if the email is not valid
   }
  };
  // Add subscribe screen code here
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/little-lemon-logo.png")}
          alt="logo"
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.motto}>
          <Text style={styles.mottoText}>
            Subscribe to our Newsletter for our latest delicious recipee
          </Text>
          <TextInput
            style={styles.text}
            name="email"
            placeholder="type your email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>
      <Pressable
        style={styles.button}
        onPress={handleEmail}
        disabled={!validateEmail(email)}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </KeyboardAvoidingView>
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
    marginBottom: 10,
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
    top: 50,
  },
  logoContainer: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    top: 10,
    //  flex:1,
    height: 400,
    // backgroundColor:'red',
  },
  motto: {
    position: "absolute",
    top: 220,
  },
  mottoText: {
    fontWeight: "bold",
    fontSize: 16,
    width: 300,
    textAlign: "center",
  },
  text: {
    width: 300,
    paddingHorizontal: 10,
    marginTop: 10,
    paddingVertical: 10,
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 8,
  },
});
export default SubscribeScreen;
