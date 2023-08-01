import React,{useState} from 'react';

import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';
import './App.css';

const App = () => {

  const [usersList,serUsersList] = useState([]);

  const addUserHandler = (uName,uAge) =>{
    
    serUsersList((prevUsersList)=>{
      return [...prevUsersList,{name:uName,age:uAge,id:Math.random().toString()}];
    });
  }

   return(
    <div>
    <AddUser onAddUser={addUserHandler}/>
    <UsersList users={usersList}/>
    </div>
   )
   
};

export default App;
