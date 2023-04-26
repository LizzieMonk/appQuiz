import { firebase } from "./firebaseConfig";

const DeleteData = (item)=>{
    const todoRef = firebase.firestore().collection('users');
    todoRef
    .doc(item.id)
    .delete()
    // .then(()=>{
    //     alert('Deleted succesfully')
    // })
    // .catch(error=>{
    //     alert(error)
    // })
}

export default DeleteData;