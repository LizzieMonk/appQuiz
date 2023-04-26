import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ButtonQuestion({title, onClick, correctColor, correctAnswer}) {
      if(correctColor && title==correctAnswer){
        return (
          <TouchableOpacity style={styles.buttonTrue} onPress={onClick}>
              <Text style={styles.text}>
                  {title}</Text>
          </TouchableOpacity>
        );
      } else{
      return (
        <TouchableOpacity style={styles.buttonFalse} onPress={onClick}>
            <Text style={styles.text}>
                {title}</Text>
        </TouchableOpacity>
      );
    }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonTrue:{
        backgroundColor:'green',
        height:50,
        width:250,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
        marginHorizontal:10,
      },
      buttonFalse:{
        backgroundColor:'grey',
        height:50,
        width:250,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
        marginHorizontal:10,
      },
      text:{
        color:'white',
        fontSize:20,
      },
    });
