
import '../index.css';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

  const {
          value:enteredName, 
          isValid: enteredNameIsValid,
          hasError: nameInputHasError,
          valueChangeHandler: nameChangeHandler,
          inputBlurHandler: nameBlurHandler,
          reset: resetName
        } = useInput( value => value.trim() !== '');

        
  const {
    value:enteredEmail, 
    isValid: enteredEmailIsValid, 
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput( value => value.includes('@'));  

  let formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const formSubmissionHandler = event => {
    event.preventDefault();
    
    if(!formIsValid){
      return;
    }

    resetName();
    resetEmail();
  }


  const nameInputClasses = 'form-control ' + (enteredNameIsValid ? 'invalid' : '');
  const emailInputClasses = 'form-control ' + (enteredEmailIsValid ? 'invalid' : '');

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler}/>
        {nameInputHasError && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input type='text' id='email' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {emailInputHasError && <p className='error-text'>Name must not be empty and has to have '@'</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
