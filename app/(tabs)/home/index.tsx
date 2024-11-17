import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

// import { Pressable } from 'react-native-gesture-handler'

const index = () => {
  const todos = [];
  return (
    <>
    <View style={styles.container}>
      <Pressable style={styles.tabs}>
        <Text style={styles.tabsText}>All</Text>
      </Pressable>
      <Pressable style={styles.tabs}>
        <Text style={styles.tabsText}>Work</Text>
      </Pressable>
      <Pressable style={{ 
        backgroundColor: "#063970",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center", 
        marginRight: "auto"
      }}>
        <Text style={styles.tabsText}>Personal</Text>
      </Pressable>
      <Pressable >
        <AntDesign name="pluscircle" size={35} color="#d26b28" />
      </Pressable>
    </View>

      <ScrollView style={{flex:1, backgroundColor:"white"}}>
        <View style={{padding:10}}>
          {todos?.length>0? (
            <View>
            </View>
          ) : (
            <View style={{
              flex:1, 
              justifyContent:"center", 
              marginTop:130, 
              marginLeft:"auto", 
              marginRight:"auto",
             alignItems:"center"
             }}>
            <Image style={{width : 200, height:200, resizeMode : "contain"}} 
                source={{
                  uri : "https://cdn-icons-png.flaticon.com/128/2387/2387679.png"
                }}
              />
              <Text style={{fontSize: 22, marginTop : 15, fontWeight : "600", textAlign:"center", margin:10}}>
                No Tasks for today! add a task
              </Text>
              <Pressable>
                <AntDesign name="pluscircle" size={35} color="#d26b28" />
              </Pressable>
            </View>
          )}
        </View>
      </ScrollView>
      
    </>
  )
}

export default index

const styles = StyleSheet.create({
  container:{ // view container
    marginHorizontal:10,
    marginVertical:10,
    flexDirection:"row", 
    alignItems:"center", 
    gap:12
  },
  tabs : { // pressable tabs
    backgroundColor: "#063970",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  tabsText : { // text of tabs
    color : "white", 
    textAlign : "center"
  }
});