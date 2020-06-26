import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default function AboutUs({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Recommanded Classes</Text>
        <Button
          title={"For Freshmen and Sophmore "}
          onPress={() => {navigation.navigate("ChrisBio");}}
        />

         <Button
          title={"For Junior and Senior"}
          onPress={() => {navigation.navigate("QingtianMei");}}
        />

      </View>
  );
}
