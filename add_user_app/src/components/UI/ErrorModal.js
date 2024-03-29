import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from './ErrorModal.module.css'

//props.onConfirm will call 
//{error && <ErrorModal title={error.title} message={error.message}/>}
//from AddUser
 
const ErrorModal = props => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}>
        <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>    
        </Card>
      </div>
    </div>
  )    
}

export default ErrorModal;