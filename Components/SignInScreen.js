import React from "react";
import axios from "axios";
import {
  Button,
  AsyncStorage,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

class SignInScreen extends React.Component {
  state = {
    email: "jean@simundia.com",
    password: "azertyui"
  };
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  logAuthentificationToken = async () => {
    const token = await AsyncStorage.getItem("userToken");
    console.log(token, " yo");
  };

  signInAsync = async () => {
    const response = await axios.post(
      "https://demo.simundia.com/api/v1/sessions",
      {
        email: this.state.email,
        password: this.state.password
      }
    );

    console.log(response.data);
    if (response.data.authentication_token) {
      await AsyncStorage.setItem(
        "userToken",
        response.data.authentication_token
      );
      console.log("coucou props : " + this.props);
      this.props.navigation.navigate("Home");
    } else {
      alert("Invalid email/password");
    }
  };
  componentDidMount = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        <View>
          <Text style={styles.title}>Connexion</Text>
          <View style={styles.border}></View>
        </View>
        <View style={styles.main_container}>
          <Text>Email professionnel</Text>
          <TextInput
            style={styles.textinput_mail}
            placeholder="prenom.nom@entreprise.com"
            autoCapitalize="none"
            placeholderTextColor="grey"
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
          />
          <Text>Mot de passe</Text>
          <TextInput
            style={styles.textinput_mp}
            placeholder="PassWord"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
          />
          <Text>Se souvenir de moi ?</Text>

          <TouchableOpacity style={styles.button} onPress={this.signInAsync}>
            <Text
              style={{
                color: "#FF595F",
                fontSize: 30
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <Text>-------------</Text>
          <Text>Inscription</Text>
          <Text>Mot de passe oublié ?</Text>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    shadowColor: "red",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  main_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textinput_mail: {
    height: 44,
    width: 320,
    borderRadius: 6,
    borderColor: "grey",
    borderWidth: 1,
    fontSize: 20,
    color: "black",
    marginTop: 20,

    marginHorizontal: 20
  },
  textinput_mp: {
    height: 44,
    width: 320,
    borderRadius: 6,
    borderColor: "grey",
    borderWidth: 1,
    fontSize: 20,
    color: "grey",
    marginTop: 20,

    marginHorizontal: 20
  },
  button: {
    marginTop: 40,
    backgroundColor: "black",
    height: 60
  },
  border: {
    alignSelf: "center",
    marginTop: 5,
    borderBottomColor: "#1751de",
    borderBottomWidth: 5,
    width: 100,
    height: 5
  },
  title: {
    color: "#091E53",
    fontSize: 20,
    marginTop: 15,
    textAlign: "center"
  }
});

export default SignInScreen;
