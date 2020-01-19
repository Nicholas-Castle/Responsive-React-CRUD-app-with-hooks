import React from 'react';

const PersonTable = props => (
  <table>
    <thead>
      <tr>
        <th>Names</th>
        <th>Usernames</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {props.people.length > 0 ? (
        props.people.map(person => (
          <tr key={person.id}>
            <td>{person.name}</td>
            <td>{person.username}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(person);
                }}
                className="button muted-button"
              >
                Update
              </button>
              <button
                onClick={() => props.deletePerson(person.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Add some people!</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default PersonTable