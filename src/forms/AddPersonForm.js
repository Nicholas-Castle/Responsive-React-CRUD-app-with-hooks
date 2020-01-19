import React, { useState } from 'react';

const AddPersonForm = props => {
	const defualtFormState = { id: null, name: '', username: '' };
	const [ person, setPerson ] = useState(defualtFormState);

	const InputChangeHandler = e => {
		const { name, value } = e.target;

		setPerson({ ...person, [name]: value });
	}

	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				if (!person.name || !person.username) return

				props.addPerson(person);
				setPerson(defualtFormState);
			}}
		>
			<label>Name</label>
			<input 
				type="text" 
				name="name" 
				value={person.name} 
				onChange={InputChangeHandler} 
			/>
			<label>Username</label>
			<input 
				type="text" 
				name="username" 
				value={person.username} 
				onChange={InputChangeHandler} 
			/>
			<button>Add</button>
		</form>
	)
}

export default AddPersonForm