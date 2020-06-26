import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements'
import ChrisPic from '../../assets/profiles/ChrisPic.jpg';

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>For Freshmen</Text>
              <Text style={styles.info}> PHYS 11a,b may replace 15a,b but 15a,b is highly recommanded  </Text>
              <Text style={styles.description}>PHYS 15a</Text>
              <Text style={styles.description}>PHYS 15b</Text>
              <Text style={styles.description}>PHYS 19a</Text>
              <Text style={styles.description}>PHYS 19b</Text>


              <Text style={styles.name}> </Text>

              <Text style={styles.name}>For Sophmore</Text>
              <Text style={styles.info}> The following classes are recommanded but you may take other classes  </Text>
              <Text style={styles.description}>PHYS 20a</Text>
              <Text style={styles.description}>PHYS 29a</Text>
              <Text style={styles.description}>PHYS 30a</Text>
              <Text style={styles.description}>PHYS 31a</Text>
              <Text style={styles.description}>PHYS 31b</Text>
              <Text style={styles.description}>PHYS 40a</Text>


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
