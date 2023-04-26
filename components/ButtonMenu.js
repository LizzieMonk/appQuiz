import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function ButtonMenu({title, onClick}) {

      return (
        <TouchableHighlight style={styles.button} onPress={onClick}>
            <Text style={styles.text}>
                {title}</Text>
        </TouchableHighlight>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      button:{
        backgroundColor:'green',
        height:60,
        width:250,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20,
      },
      text:{
        color:'white',
        fontSize:20,
      },
    });
