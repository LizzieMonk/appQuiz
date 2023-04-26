import { StyleSheet, View } from 'react-native';
import ButtonMenu from '../components/ButtonMenu';
import Icon from '../icons/Icon';

export default function Menu({navigation}) {
      return (
        <View style={styles.container}>
            <Icon style={styles.icon}/>
            <ButtonMenu title={'START'}
            onClick={()=>{navigation.navigate('Question')}}/>
            <ButtonMenu title={'SCORE'}
            onClick={()=>{navigation.navigate('Rating')}}/>
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
      icon:{
        marginBottom:100,
      },
    });
