import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = ()=>{
    const user= { 
      email, password
    };
    console.log("login ", user);
    axios.post("http://localhost:3000/login", user).then(response=>{
      console.log("Response /login ", response.data);
      const token = response.data.token;
        AsyncStorage.setItem("authToken", token);
        router.replace("/(tabs)/home");
    }).catch(err=>{
      console.error("Error in /login", err.response.data.message);
      Alert.alert("Login Failed", err.response.data.message);
    })
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <View style={{ marginTop: 80 }}>
        <Text style={{ fontSize: 23, fontWeight: "800", color: "#0066b2" }} >TODO-LIST TRACKER</Text>
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "600", marginTop: 12 }}>Log in to your account</Text>
        </View>
        <View style={{ marginTop: 70 }}>
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
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 12 }}>
              <Text>Keep me logged in</Text>
              <Text style={{ color: "#0066b2", fontWeight: "500" }}>Forgot Password</Text>
            </View>
            <View style={{ marginTop: 40 }} />
            <Pressable
              onPress={()=>{
                handleLogin()
              }}
            style={{
              width: 200,
              margin: "auto",
              borderRadius: 10,
              alignItems: "center",
              backgroundColor: "#0066b2"
            }}>
              <Text style={{ margin: 10, fontSize:18, fontWeight:"bold",  color: "white" }}>Login</Text>
            </Pressable>
            <Pressable onPress={()=> router.replace("/register")}>
              <Text style={{ textAlign: "center", margin:10, fontSize: 15, color: "gray" }}>Don't have account? Sign up</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default login

const styles = StyleSheet.create({})