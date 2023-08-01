 import React from "react";

 const UsersList = props =>{
    // console.log(props)
    return (
        <ul>
            {props.users.map((user) =>(
                <li  key={user.id}>
                  { user.name}({user.age} year old)
                </li>
            ))}
        </ul>
    );
 };

 export default UsersList;