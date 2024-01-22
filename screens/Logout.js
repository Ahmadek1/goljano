import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import App from '../App';

const Logout = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.formAction}>
        <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
  formAction: {
    marginVertical: 24,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#FC6D3F",
    borderColor: "#FC6D3F",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
});
