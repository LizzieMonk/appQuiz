import { firebase } from "./firebaseConfig";

const AddData = (name, score) =>{
    const todoRef = firebase.firestore().collection('users');
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const data = {
        name: name,
        score: score,
        createdAt: timestamp,
    }
    todoRef
    .add(data)
}

export default AddData;