import { firebase } from "./firebaseConfig";

const ReadQuest =  async (setQuestions)=>{
    const todoRef = firebase.firestore().collection('questions');
    todoRef
        .onSnapshot(
            querySnapshot=>{
                const question =[]
                querySnapshot.forEach((doc)=>{
                    const {answers, correctAnswer, text} = doc.data()
                    question.push({
                        id: doc.id,
                        answers,  //массивчик
                        correctAnswer,
                        text,
                    })
                })
                setQuestions (question)
            })
}

export default ReadQuest;