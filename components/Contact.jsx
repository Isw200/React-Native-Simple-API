import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Person from "./Person";

function Contact() {
  const [people, setPeople] = useState([
    {
      id: 0,
      name: "Isuru",
      email: "isu@123.com",
      avatar:
        "https://robohash.org/expeditainvoluptatem.png?size=300x300&set=set1",
    },
    {
      id: 1,
      name: "John",
      email: "jhon@123.com",
      avatar:
        "https://robohash.org/etveniamoccaecati.png?size=300x300&set=set1",
    },
  ]);
  const addPerson = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
        "X-RapidAPI-Host": "medium2.p.rapidapi.com",
      },
    };
    fetch("https://random-data-api.com/api/v2/users", options)
      .then((response) => response.json())
      .then((response) => {
        let newPerson = {
          id: response.id,
          name: response.first_name,
          email: response.email,
          avatar: response.avatar,
        };

        const newList = [...people, newPerson];
        setPeople(newList);
      })
      .catch((err) => console.error(err));
  };

  const deletePerson = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter((people) => people.id != id);
    });
  };

  return (
    <View>
      <Person person={people} deleteHandler={deletePerson} />
      <View style={styles.buttonContainer}>
        <Button title="SEE MORE" onPress={addPerson} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    marginTop: -36,
    marginLeft: 280,
  },
});

export default Contact;
