
import React from "react";
import Button from "./Button";

const ErrorModel = props =>{
    return (<>
    <div onClick={props.onConfirm}></div>
        <header>
            <h2>{props.title}</h2>
        </header>
        <div>
            <p>{props.message}</p>
        </div>
        <footer>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
        </>
    )
}

export default ErrorModel;