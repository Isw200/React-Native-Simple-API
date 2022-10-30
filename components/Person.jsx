import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

function Person(props) {
  const deleteItem = props.deleteHandler;

  return (
    <View>
      <FlatList
        numColumns={1}
        keyExtractor={(item) => item.id}
        data={props.person}
        renderItem={({ item }) => (
          <View style={styles.personContainer}>
            <View>
              <Image style={styles.avetar} source={{ uri: item.avatar }} />
            </View>
            <View style={styles.personDetails}>
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.email}>{item.email}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => deleteItem(item.id)}>
                  <AntDesign name="delete" style={styles.delete} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  avetar: {
    width: 70,
    height: 70,
    backgroundColor: "#DEDEDE",
    borderRadius: 200,
  },
  personContainer: {
    backgroundColor: "#F6F6F6",
    flexDirection: "row",
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
  },
  personDetails: {
    marginLeft: 20,
    width: 100,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 30,
    fontWeight: "500",
  },
  email: {
    marginTop: 10,
  },
  delete: {
    marginTop: 10,
    fontSize: 20,
  },
});

export default Person;
