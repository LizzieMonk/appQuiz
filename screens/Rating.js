import { View, Text, StyleSheet, FlatList} from "react-native";
import React, { useEffect, useState } from "react";
import User from "../components/UserOfList";
import ReadUsers from "../firebase/ReadUsers";

export default function Rating() {
    const [users, setUsers] = useState([]);

    useEffect ( ()=>{
        ReadUsers(setUsers);
    }, [])

    return (
      <View style={styles.container}>
          <View style={styles.blockTitle}>
              <Text style={styles.tileText}>
                  Users Rating</Text>
          </View>
          <FlatList
          data={users}
          renderItem={({item})=>(
              <View>
                  <User
                  item={item}
                  nameUser={item.name}
                  scoreUser={item.score}/>
              </View>
          )}>
          </FlatList>
      </View>
         );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
        blockTitle:{
            marginHorizontal:10,
            marginVertical:30,
        },
        tileText:{
            fontSize:40,
        },
    });
