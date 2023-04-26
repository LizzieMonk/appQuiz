import { View, Alert } from "react-native";
import Prompt from 'react-native-modal-prompt';
import AddData from "../firebase/AddData";

export default function ModalForSave ({visible, onClick, counter}){
    if(visible){
        return(
            <View>
                <Prompt
                visible={true}
                title="Введите имя:"
                placeholder="Иван Иванов"
                defaultValue=""
            //  showCount={true}
                operation={[
                {
                    text: 'Меню',
                    color: '#000',
                    onPress: () => {
                        onClick();
                }},
                {
                    text: 'Сохранить',
                    onPress: (value) =>{
                        if(!value.trim())
                            // Alert.alert('Строка пустая или состоит только из пробелов','',[])
                            modalAlert();
                        else {
                            AddData(value, counter);
                            onClick();
                        }
                    }
                },
      ]}/>
            </View>
        );
    }
}

const modalAlert = ()=>{
    Alert.alert('Строка пустая или состоит только из пробелов','',[])
}

