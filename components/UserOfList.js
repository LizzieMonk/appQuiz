import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DeleteData from "../firebase/DeleteData";

const UserOfList = ({item, nameUser, scoreUser}) =>{

    return (
        <View style={styles.field}>
            <View style={styles.user}>
            <Text style={styles.text}>
                {nameUser}</Text>
            <Text style={styles.text}>
                {scoreUser}/10</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>{DeleteData(item)}}>
                <Text style={styles.text}>
                ✖</Text>
            </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    field: {
      width: 300,
      borderColor:'grey',
      borderBottomWidth: 0.3,
      flexDirection:'row',
    },
    user:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1,
        paddingRight:50,
    },
    text:{
        fontSize:20,
        marginVertical:10,
    },
    button:{
        marginLeft:'auto',
    },
  });

export default UserOfList;