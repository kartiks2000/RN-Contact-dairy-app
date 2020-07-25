import React,{ useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button ,KeyboardAvoidingView} from 'react-native';

 const Form = (props) => {

    const [indv,setindv] = useState({
        fname: '',
        sname: '',
        address: '',
        email: '',
        number: '',
    });

    const fnamehandler = (el) => {
        // console.log(el.nativeEvent.text);
        setindv({...indv,fname: el.nativeEvent.text})
    }

    const snamehandler = (el) => {
        // console.log(el.nativeEvent.text);
        setindv({...indv,sname: el.nativeEvent.text})
    }

    const adresshandler = (el) => {
        // console.log(el.nativeEvent.text);
        setindv({...indv,address: el.nativeEvent.text})
    }

    const numberhandler = (el) => {
        // console.log(el.nativeEvent.text);
        setindv({...indv,number: el.nativeEvent.text})
    }

    const emailhandler = (el) => {
        // console.log(el.nativeEvent.text);
        setindv({...indv,email: el.nativeEvent.text})
    }

    const initsave = () => {
        props.save(indv);
        setindv({
            fname: '',
            sname: '',
            address: '',
            email: '',
            number: '',
        });
    }

  return (
        <KeyboardAvoidingView style={st1.formscreen} behavior="padding">
            <TextInput style={st1.inp} placeholder="First name" value={indv.fname} onChange={fnamehandler}/>
            <TextInput style={st1.inp} placeholder="Second name" value={indv.sname} onChange={snamehandler}/>
            <TextInput style={st1.inp} placeholder="Address" value={indv.address} onChange={adresshandler}/>
            <TextInput style={st1.inp} placeholder="Email" value={indv.email} onChange={emailhandler}/>
            <TextInput style={st1.inp} placeholder="Conatct number" keyboardType='number-pad' value={indv.number} onChange={numberhandler}/>
            <View style={st1.btn1}><Button title="ADD" onPress={initsave}/></View>
        </KeyboardAvoidingView>
  );
}

export default Form;

const st1 = StyleSheet.create({
  formscreen:{
      marginTop: 40,
      justifyContent: 'center',
      alignItems: 'center',
  },
  inp:{
      borderColor: 'pink',
      borderWidth: 7,
      padding: 10,
      margin: 10,
      borderRadius: 10,
      width: 230,
  },
  btn1:{
      width: 100,
      marginTop: 20,
  }
});


