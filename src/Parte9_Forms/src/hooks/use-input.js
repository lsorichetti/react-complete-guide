import { useReducer } from "react";

const initialInputState = {
    value: '',
    isTouched: false
}

const inputStateReducer = (state,action) => {

    if(action.type === 'INPUT'){
        return {
            value: action.value,
            isTouched: state.isTouched
        }
    }
    if(action.type === 'BLUR'){
        return {
            value: state.value,
            isTouched: true
        }
        
    }
    if(action.type === 'RESET'){
        return initialInputState;
    }

    return initialInputState;
}

const useInput = (validateValueFn) => {

    //const [enteredValue, setEnteredValue] = useState('');
    //const [isTouched, setIsTouched] = useState(false);

    const [inputState, dispatch] = useReducer(inputStateReducer,initialInputState);

    const enteredValue = inputState.value;
    const isTouched = inputState.isTouched;

    const valueIsValid = validateValueFn(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = event => {

        //setEnteredValue(event.target.value);
        dispatch({type: 'INPUT', value: event.target.value});
    }

    const inputBlurHandler = event =>{
        //setIsTouched(true);
        dispatch({type: 'BLUR'});
    }

    const reset = () =>{
        dispatch({type: 'RESET'});
        /*setEnteredValue('');
        setIsTouched(false);*/
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput;