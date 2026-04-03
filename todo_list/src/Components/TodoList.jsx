import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState('');
  const [listInputs, setListInputs] = useState({});

  // ... is spread syntax to copy all key-value pairs as individual attributes to the child component / new object
  // spread syntax with , means update object while keeping existing key-value pairs unchanged
  // e.g. const [user, setUser] = useState({ name: 'John', age: 30 });
  // setUser({ ...user, age: 31 }); // updates age while keeping name unchanged
  // but in array, spread syntax is appending new element
  // e.g. const [numbers, setNumbers] = useState([1, 2, 3]);
  // setNumbers([...numbers, 4]); // adds 4 to the end of the array

  const handleAddTodo = () => {
    if (headingInput.trim() !== '') { //ensure user enter something
      setTodos([...todos, { heading: headingInput, lists: [] }]);
      setHeadingInput('');  //reset input field after adding heading
    }
  }

  // Function to handle adding a new list item to a specific todo heading
  const handleAddList = (index) => {
      // Check if the input for the given index is not empty or just whitespace
      if (listInputs[index] && listInputs[index].trim() !== '') {
          const newTodos = [...todos]; // Create a copy of the current todos array
          newTodos[index].lists.push(listInputs[index]); // Add the new list item to the corresponding heading's list (lists is key of todos)
          setTodos(newTodos); // Update the todos state with the new list item -> ***Avoid directly mutating state, always create a new copy of the state and update it***
          setListInputs({ ...listInputs, [index]: '' }); // Clear the input field for that index
      }
  };

  // Function to update list input value for a specific heading index
  const handleListInputChange = (index, value) => {
      setListInputs({ ...listInputs, [index]: value }); // Update the listInputs state for the corresponding index
  };


  const handleDeleteTodo = (index) => {
    // Create a shallow copy of the current todos array
    const newTodos = [...todos];
    // Remove the todo at the specified index
    newTodos.splice(index, 1);
    // Update the state with the new array (without the deleted todo)
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
          <div className="input-container">{/* Input field to enter a new heading */}
            <input
              type="text"
              className="heading-input"// CSS class for styling
              placeholder="Enter heading"// Text shown when input is empty
              value={headingInput}
              onChange={(e) => {setHeadingInput(e.target.value);}} // Add onChange event handler to update headingInput state
            />
            {/* Button to add the entered heading to the todo list */}
            <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
          </div>

      </div>
      <div className="todo_main">
        {todos.map((todo, index) => ( // Iterate over each todo item in the todos array
          <div key={index} className="todo-card">
            <div className="heading_todo">
              {/* Display the heading text of the current todo item */}
              <h3>{todo.heading}</h3> {/* Display the heading here */}
              {/* Button to delete the current heading by passing its index */}
              <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>Delete Heading </button>
            </div>

            <ul>
              {/* Iterate over each list item inside the current todo */}
              {todo.lists.map((list, listIndex) => (
              <li key={listIndex} className='todo_inside_list'>
                {/* Display the text content of the list item */}
                <p>{list}</p>
              </li>
              ))}
            </ul>


            <div className='add_list'>
              {/* Input field for adding a new item under a specific heading */}
              <input
                type="text"
                className="list-input"
                placeholder="Add List"
                value={listInputs[index] || ''}// Use the value from listInputs array based on the current heading index
                onChange={(e) => handleListInputChange(index, e.target.value)}/>
              {/* Button to add the list item to the corresponding heading */}
              <button className="add-list-button" onClick={() => handleAddList(index)}>Add List</button>
            </div>

          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
