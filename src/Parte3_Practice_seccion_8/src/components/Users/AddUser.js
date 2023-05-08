
import { useState, useRef } from 'react';

import styles from './AddUser.module.css';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const AddUserHandler = event =>{
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if(enteredName.trim().length===0 || enteredAge.trim().length===0){
            setError({
                title:'Invalid Input',
                message: 'Enter a valid name and Age'
            });
            return;
        }
        if(Number(enteredAge) < 1){
            setError({
                title: 'Invalid Age',
                message: 'Number greater than 0'
            });
            return;
        }

        const user = {
            id: Math.random(),
            name: enteredName.trim(),
            age: Number(enteredAge)
        }
        props.onAddUser(user);

        // We should'nt modify DOM, but where is OK
        ageInputRef.current.value = '';
        nameInputRef.current.value = '';
    }

    const errorHandler = () =>{
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" ref={nameInputRef} type="text" ></input>
                    
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" ref={ageInputRef} type="number" ></input>

                    <Button type="submit">Add User</Button>
                </form>
            </Card>    
        </Wrapper>        
    )
}

export default AddUser;