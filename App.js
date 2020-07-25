import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView  } from 'react-native';

import Form from './components/form'; 
import People from './components/people';

export default function App() {

  const [record,setrecord] = useState([]);
  const [window,setwindow] = useState(true);

  const saving = (obj) => {
    record.push(obj);
  } 

  const wind1 = () => {
    setwindow(true);
  }

  const wind2 = () => {
    setwindow(false);
  }

  const deleteit = (key) => {
    // console.log("ok",key);
    var r = [...record];
    r.map((i,idx) => {
      if(i.number == key){
        r.splice(idx,1);
      }
      setrecord(r);
    });
  }

  return (
    <ScrollView>
    <View style={st1.screen}>
      <View style={st1.topbar}><Text style={st1.bartext}>My Record...</Text></View>
      <View style={st1.btns1}>
        <Button style={st1.btn} title="Add person" onPress={wind1}/>
        <Button style={st1.btn} title="Show persons" onPress={wind2}/>
      </View>
      {window? <Form save={(obj) => saving(obj)}></Form> : null}
      <ScrollView >
      {!window? record.map(i => {
        return <People fname={i.fname} sname={i.sname} address={i.address} email={i.email} number={i.number} key={i.number} myid={i.number} deleting={(key) => deleteit(key)}/> }) : null }
      </ScrollView>  
    </View>
    </ScrollView>
  );
}

const st1 = StyleSheet.create({
  screen:{
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  topbar:{
    padding: 30,
    backgroundColor: 'pink',
    width: '100%',
    alignItems: 'center',
  },
  bartext:{
    fontSize: 25,
    color: 'red',
  },
  btns1:{
    flexDirection: 'row',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 20,
  },
  btn:{

  }
});


