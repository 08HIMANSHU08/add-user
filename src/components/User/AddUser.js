
import React,{useState} from "react";
import Button from "../UI/Button/Button";
import ErrorModel from "../UI/Button/ErrorModel";

const AddUser = (props) =>{

    const [enteredUsername,setEnteredUsername] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [error,setError] = useState();

    const addNewUserHandler = (event) =>{
        event.preventDefault();
        if(enteredUsername.trim().length===0||enteredAge.trim().length===0){
           setError({
            title:"Invalid Input",
             message:"please enter valid name and age"
           })
            return;
        }
        if(+enteredAge < 1){
            setError({
                title:"Invalid age",
                 message:"age greater then 0"
               })
            return;
        }
        // console.log(enteredUsername,enteredAge)
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredUsername('')
        setEnteredAge('');
        
    }

    const usernameChangeHandler = (event) =>{
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) =>{
        setEnteredAge(event.target.value);
    }

    const errorHandler = () =>{
        setError(null);
    }

    return (<>
        {error &&  <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <form onClick={addNewUserHandler}>
            <div>
                <label htmlFor="name"> USERNAME</label>
                <input type="text" id="name" value={enteredUsername} onChange={usernameChangeHandler} />
            </div>
            <div>
                <label htmlFor="age">AGE(in years)</label>
                <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}/>
            </div>
            <div>
                <Button type="submit">Add User</Button>
            </div>
        </form>
        </>
    )
};

export default AddUser;