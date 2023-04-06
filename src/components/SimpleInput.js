
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangedHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== '');

	const {
		value: enteredEmail,
		isValid: enteredEmailIsInvalid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailInputBlurHandler,
		reset: resetEmailInput
	} = useInput(value => value.includes('@'));

	let formIsValid = false;

	if (enteredNameIsValid && enteredNameIsValid) {
		formIsValid = true;
	}

	

	const formSumbitionHandler = (event) => {
		event.preventDefault();

		if (enteredNameIsValid && enteredEmailIsInvalid) {
			return;
		}

		// nameInputRef.current.value =''; => same as set with useState NOT IDEAL, DONT MANIPULATE DOM WITH VANILLA JS

		resetNameInput();
		resetEmailInput()
	};

	const nameInputClasses = nameInputHasError
		? 'form-control invalid'
		: 'form-control';

	const emailInputClasses = emailInputHasError
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSumbitionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={nameChangedHandler}
					onBlur={nameBlurHandler}
					value={enteredName}
				/>
			</div>
			{nameInputHasError && (
				<p className='error-text'>Name must not be empty.</p>
			)}

			<div className={emailInputClasses}>
				<label htmlFor='email'>Your Email</label>
				<input
					type='email'
					id='email'
					onChange={emailChangeHandler}
					onBlur={emailInputBlurHandler}
					value={enteredEmail}
				/>
			</div>
			{emailInputHasError && (
				<p className='error-text'>Enter a valid email</p>
			)}

			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
