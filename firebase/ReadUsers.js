import { firebase } from "./firebaseConfig";

const ReadUsers =  async (setUsers)=>{
    const todoRef = firebase.firestore().collection('users');
    todoRef
            .onSnapshot(
                querySnapshot=>{
                    const user =[]
                    querySnapshot.forEach((doc)=>{
                        const {name, score} = doc.data()
                        user.push({
                            id: doc.id,
                            name,
                            score,
                        })
                    })
                    setUsers (user)
                })
}

export default ReadUsers;