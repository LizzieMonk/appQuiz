import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ButtonQuestion from "../components/ButtonQuestion";
import Modal from "../components/ModalForSave";
import ReadQuest from "../firebase/ReadQuest";

export default function Question({navigation}) {
    const [modal, showModal] = useState(false);

    const prevent = ()=> {
        showModal(true);
    }
    // const preven = ()=> Alert.alert(`Правильный ответ: "${questions[numberQuestion].correctAnswer}\"`, "", []);

    const [visible, setVisible] = useState(false)
    const onClick = (pressedAnswer) => {
            // preven();
            setVisible(true);
            setTimeout(() => {
                if(pressedAnswer===questions[numberQuestion].correctAnswer){
                    increaseCounter(counter+1);
                }
                // console.log('счет:   '+counter)
                numberQuestion<questions.length-1
                    ? setNumberQuestion(numberQuestion+1)
                    : prevent();
                setVisible(false)
            }, 500);
    }
    const [numberQuestion, setNumberQuestion] = useState(0);
    const [counter, increaseCounter] = useState(0)
    const [questions, setQuestions] = useState([{}]);

    useEffect ( ()=>{
        ReadQuest(setQuestions);
    }, [])

      return (
        <View style={styles.container}>
            <View style={styles.blockTitle}>
                <Text style={styles.tileText}>
                    {questions[numberQuestion].text}</Text>
            </View>
            <FlatList
            data={questions[numberQuestion].answers}
            renderItem={({item})=>(
                <ButtonQuestion
                title={item}
                onClick={()=>onClick(item)}
                correctColor={visible}
                correctAnswer={questions[numberQuestion].correctAnswer}/>
            )}>
            </FlatList>
            <Modal visible={modal}
            onClick={()=>{navigation.navigate('Menu')}}
            counter={counter}/>
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
        innerBlock: {
          backgroundColor: 'red',
        },
        blockTitle:{
            marginHorizontal:10,
            marginVertical:100,
        },
        tileText:{
            fontSize:20,
        },
    });
