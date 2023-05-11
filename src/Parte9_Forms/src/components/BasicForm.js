
import '../index.css';
import useInput from '../hooks/use-input';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {

  const {
    value:enteredFirstName, 
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(isNotEmpty);
  
  const {
    value:enteredLastName, 
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(isNotEmpty);
  
  const {
    value:enteredEmail, 
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isEmail);

  const firstNameInputClasses = 'form-control ' + (enteredFirstNameIsValid ? '' : 'invalid');
  const lastNameInputClasses = 'form-control ' + (enteredLastNameIsValid ? '' : 'invalid');
  const emailInputClasses = 'form-control ' + (enteredEmailIsValid ? '' : 'invalid');

  const formIsvalid = enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid;

  const formSubmitHandler = event => {
    event.preventDefault();

    if(!formIsvalid){
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredFirstName} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} />
          {firstNameInputHasError && <p className='error-text'>First name must not be empty</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={enteredLastName} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} />
          {lastNameInputHasError && <p className='error-text'>Last name must not be empty</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name'  value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        {emailInputHasError && <p className='error-text'>Enter a valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsvalid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
