import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements'
import QingtianMei from '../../assets/profiles/QingtianMei.jpeg';

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>For Upperclass</Text>
              <Text style={styles.info}> Take following classes and electives to fulfill the department requirements  </Text>
              <Text style={styles.description}>PHYS 100a</Text>
              <Text style={styles.description}>PHYS 39a</Text>
              <Text style={styles.description}>PHYS 99d</Text>


            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  major:{
    fontSize:16,
    color: "#5f9ea0",
    marginTop:10
  },
  school: {
      fontSize: 16,
      color: '#6495ed',
      marginTop: 10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  socialIcon: {
    marginLeft: 14,
    marginRight: 14,

  },
  socialRow: {
    flexDirection: 'row',
    marginTop:10
  },
});
