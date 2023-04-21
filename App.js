import { StatusBar } from "expo-status-bar";
import React, {Component} from "react";
import { StyleSheet, FlatList, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.profileimage}></View>
      </View>
      <FlatList
        data={[
          { key: "image1", url: "https://source.unsplash.com/random/300x300" },
          { key: "image2", url: "https://source.unsplash.com/random/300x301" },
          { key: "image3", url: "https://source.unsplash.com/random/300x302" },
          { key: "image4", url: "https://source.unsplash.com/random/300x303" },
        ]}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image style={styles.image} source={{ uri: item.url }} />
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: "45%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#98d2c1",
  },
  profileimage: {
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#fff",
    backgroundColor: "#eee",
  },
  center: {
    height: "10%",
    backgroundColor: "#7fbcac",
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
