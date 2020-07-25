import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

const People = (props) => {;

    const del = () => {
        // console.log("hie" ,props.myid)
        props.deleting(props.myid);
    }

    return(
        <View style={sty.single}>
            <View style={sty.entry}><Text style={sty.txt}>First name: <Text style={sty.s}>{props.fname}</Text></Text></View>
            <View style={sty.entry}><Text style={sty.txt}>Second name: <Text style={sty.s}>{props.sname}</Text></Text></View>
            <View style={sty.entry}><Text style={sty.txt}>Address: <Text style={sty.s}>{props.address}</Text></Text></View>
            <View style={sty.entry}><Text style={sty.txt}>Email: <Text style={sty.s}>{props.email}</Text></Text></View>
            <View style={sty.entry}><Text style={sty.txt}>Number: <Text style={sty.s}>{props.number}</Text></Text></View>
            <Button title="Delete" onPress={() => del(props.myid)}/>
        </View>   
    );
}

export default People;

const sty = StyleSheet.create({
    single:{
        backgroundColor: 'gray',
        padding: 15,
        margin: 20,
        borderColor: 'black',
        borderWidth: 4,
    },
    entry:{
        margin: 10,
        padding: 10,
    },
    txt:{
        fontSize: 22,
    },
    s:{
        color: 'red',
    }
});