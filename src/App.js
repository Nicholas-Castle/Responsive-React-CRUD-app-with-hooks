import React, { useState, Fragment } from 'react';
import AddPersonForm from './forms/AddPersonForm';
import EditPersonForm from './forms/EditPersonForm';
import PersonTable from './tables/PersonTable';
import './App.css';

const App = () => {
	// Dummy Data
	const peopleData = [
		{ id: 1, name: 'Jesse', username: 'prepareForTrouble' },
		{ id: 2, name: 'James', username: 'MakeItDouble' },
		{ id: 3, name: 'Misty', username: 'waterType4life' },
	];

	const defualtFormState = { id: null, name: '', username: '' };

	// Set state
	const [ people, setPeople ] = useState(peopleData);
	const [ selectedPerson, setSelectedPerson ] = useState(defualtFormState);
	const [ isEditing, setEditMode ] = useState(false);

	
	const addPerson = person => {
    person.id = people.length + 1
    
		setPeople([ ...people, person ]);
	};

	const deletePerson = id => {
		setEditMode(false);

		setPeople(people.filter(person => person.id !== id));
	};

	const updatePerson = (id, updatedPerson) => {
		setEditMode(false);

		setPeople(people.map(person => (person.id === id ? updatedPerson : person)));
	};

	const editRow = person => {
		setEditMode(true);

		setSelectedPerson({ id: person.id, name: person.name, username: person.username });
	};

	return (
		<div className="container">
			<h1>CRUD App built with hooks</h1>
			<div className="flex-row">
				<div className="flex-large">
					{isEditing ? (
						<Fragment>
							<h2>Update</h2>
							<EditPersonForm
								isEditing={isEditing}
								setEditMode={setEditMode}
								selectedPerson={selectedPerson}
								updatePerson={updatePerson}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add a Person</h2>
							<AddPersonForm addPerson={addPerson} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>User Data</h2>
          <PersonTable 
            people={people} 
            editRow={editRow} 
            deletePerson={deletePerson} 
          />
				</div>
			</div>
		</div>
	)
};

export default App