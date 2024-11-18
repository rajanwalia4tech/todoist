import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import axios from 'axios';

const register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();
  const handleRegister = ()=>{
    const user = {
      name, email, password
    };
    axios.post("http://localhost:3000/register",user).then((response)=>{
      console.log(response);
      Alert.alert("Registeration successfull", "You have been registered successfully");
      setEmail("");
      setName("");
      setPassword("");
    }).catch(error=>{
      Alert.alert("Registeration failed", "An error occurred while registeration");
      console.error("Error while registeration", error.message);
    })

  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <View style={{ marginTop: 80 }}>
        <Text style={{ fontSize: 23, fontWeight: "800", color: "#0066b2" }} >TODO-LIST TRACKER</Text>
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "600", marginTop: 12 }}>Register to your account</Text>
        </View>
        <View style={{ marginTop: 70 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#E0E0E0", paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
          <MaterialCommunityIcons style={{ marginLeft: 10 }} name="human-greeting" size={24} color="black" />
            <TextInput
              value={name}

              onChangeText={(text) => {
                setName(text)
              }}

              style={{
                color: "#0066b2",
                marginVertical: 10,
                width: 300,
                fontSize: name ? 17 : 17,
                paddingRight: 10
              }}

              placeholder="Enter your Name">
            </TextInput>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#E0E0E0", paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
            <MaterialIcons style={{ marginLeft: 10 }} name="email" size={24} color="black" />
            <TextInput
              value={email}

              onChangeText={(text) => {
                setEmail(text)
              }}

              style={{
                color: "#0066b2",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 17 : 17,
                paddingRight: 10
              }}

              placeholder="Enter your email">
            </TextInput>
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#E0E0E0", paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
              <MaterialIcons style={{ marginLeft: 10 }} name="lock" size={24} color="black" />
              <TextInput
                value={password}

                onChangeText={(text) => {
                  setPassword(text)
                }}

                style={{
                  color: "#0066b2",
                  marginVertical: 10,
                  width: 300,
                  fontSize: password ? 17 : 17,
                  paddingRight: 10
                }}

                placeholder="Enter your password">
              </TextInput>
            </View>
            <View style={{ marginTop: 40 }} />
            <Pressable 
              onPress={()=>{
                handleRegister();
              }}
            style={{
              width: 200,
              margin: "auto",
              borderRadius: 10,
              alignItems: "center",
              backgroundColor: "#0066b2"
            }}>
              <Text style={{ margin: 10, fontSize:18, fontWeight:"bold",  color: "white" }}>Register</Text>
            </Pressable>
            <Pressable onPress={()=> router.replace("/login")}>
              <Text style={{ textAlign: "center", margin:10, fontSize: 15, color: "gray" }}>Already have an account? Login</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default register

const styles = StyleSheet.create({})