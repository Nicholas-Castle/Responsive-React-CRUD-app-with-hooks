import React, { useState, useEffect } from 'react';

const EditPersonForm = props => {
  const [ person, setPerson ] = useState(props.selectedPerson);

  useEffect(
    () => {
      setPerson(props.selectedPerson);
    },
    [ props ]
  );
  
  const InputChangeHandler = e => {
    const { name, value } = e.target

    setPerson({ ...person, [name]: value });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();

        props.updatePerson(person.id, person);
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
        onChange={InputChangeHandler} />
      <button>Update</button>
      <button 
        onClick={() => props.setEditMode(false)} 
        className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditPersonForm