import { useEffect, useState } from 'react';
import './App.css';
import {signInWithGoogle} from "./firebase-config.js"


function App() {
  return (
    <div>
    <button onClick={signInWithGoogle}>Sign In With Google</button>
    <h1>{localStorage.getItem("name")}</h1>
    <h1>{localStorage.getItem("email")}</h1>
    <img src={localStorage.getItem("pfp")}></img>
    </div>
  )
} 

// function App() {
//   const [users, setUsers] = useState([])
//   const userCollectionRef = collection(db, "users")

//   useEffect(() => {
//     const getUsers = async () => {    
//       const data = await getDocs(userCollectionRef)
//       setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
//     }
//     getUsers()
//   })
//   return (
    
//     <div className="App">
//       {users.map((user) => {
//         return( 
//         <div>
//         <h1>Name: {user.name}</h1>
//         <h1>Age: {user.age}</h1>
//         </div> 
//         )})}
      
//     </div>
//   );
// }

export default App;
