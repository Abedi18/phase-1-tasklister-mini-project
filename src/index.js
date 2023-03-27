document.addEventListener("DOMContentLoaded", () => {
  // Get references to the form and list elements in the HTML document
const newTaskDescription = document.getElementById("new-task-description");
const theList = document.getElementById("tasks");

// Define a function to create a new task
const createNewTask = event => { 
   // Prevent the default behavior of the form submission
  event.preventDefault(); 

   // Create a new list item element
  const newTask = document.createElement('li');
// Set the text of the new list item to the value of the task description input field
  newTask.innerText = newTaskDescription.value;
  // Call the createButton function to add a delete button to the new task
  createButton(newTask);
  // Add the new task to the list
  theList.appendChild(newTask);
  // Reset the form input field to its initial state
  event.target.reset();
};
// Define a function to create a delete button for a task
const createButton = task => {
  // Create a new button element
   const btn = document.createElement('button');
    // Set the text of the button to "X"
    btn.innerText = "X";
 // Add the button to the task
    task.appendChild(btn);
    // Add a click event listener to the button that calls the deleteTask function
    btn.addEventListener('click',  (e) => deleteTask(e));
}
// Define a function to delete a task
const deleteTask = (e) => {
    // Get a reference to the parent element of the clicked button (the task)
  const selectedTask = e.target.parentElement;
  // Remove the task from the list
  theList.removeChild(selectedTask);
}
// Add an event listener to the form submit button that calls the createNewTask function
document.querySelector('#create-task-form').addEventListener("submit"
, (e) => createNewTask(e))
});
