# To-Do-App
A Todo App to manage day-to-day tasks

A simple and responsive Todo Application built using HTML, Tailwind CSS, and Vanilla JavaScript.
This app allows users to create, display, delete, and persist tasks using localStorage.

🚀 Features
<ul>
  <li>Add new todos with:
Title,
Description,
Optional Note</li>

<li> Delete individual todos
<li>Persistent storage using localStorage</li>

<li>Data remains after page refresh</li>

<li>Responsive UI using Tailwind CSS</li>

<li>Auto-clear input fields after submission</li>

<li>Cancel dialog functionality</li>
</ul>
🛠 Technologies Used
<ul>
<li>HTML5</li>
<li>Tailwind CSS</li>
<li></li>JavaScript (ES6)</li>
<li>Browser localStorage API</li>
</ul>
📂 Project Structure
📁 todo-app
│── index.html
│── script.js
│── output.css (Tailwind build file)
│── README.md

⚙️ How It Works
<ol>
<li>Adding a Todo</li>
<ul>
<li>User enters details in the dialog box.</li>
<li>On clicking Submit:</li>
<li>Data is collected.</li>
<li>A todo object is created.</li>
<li>The object is pushed into an array.</li>
<li>The array is stored in localStorage.</li>
<li>>UI updates dynamically.</li>
</ul>

<li>Displaying Todos</li>

On page load:
<ul>
<li>Data is fetched from localStorage.</li>
<li>displayTodos() renders all stored todos.</li>
<li>The UI is always synced with stored data.</li>
</ul>
<li>Deleting a Todo</li>
<ul>
<li>Each todo has a delete button.</li>
<li>When clicked:</li>
<li>The correct index is removed from the array.</li>
<li>localStorage updates.</li>
<li>UI re-renders automatically.</li>
</ul>
<li>Key Concepts Implemented</li>
<ul>
<li>DOM Manipulation</li>
<li>Event Handling</li>
<li>Template Literals</li>
<li>Event Delegation (if implemented)</li>
<li>Data Persistence using localStorage</li>
<li>Separation of Concerns (Data vs UI Rendering)</li>
</ul>
<li>Learning Outcomes</li>
<ul>
<li>This project demonstrates:</li>
<li>Managing application state</li>
<li>Updating UI dynamically</li>
<li>Storing structured data in localStorage</li>
<li>Writing clean and modular JavaScript functions</li>
<li>Building responsive layouts using Tailwind CSS</li>
</ul>
<li>Future Improvements</li>
<ul>
<li>Mark todo as completed</li>

<li>Edit existing todos</li>

<li>Add date & time</li>

<li>Search and filter todos</li>

<li>Dark mode support</li>

<li>Backend integration with database</li>

<li>Preview</li>
</ul>

<li>How to Run</li>
<ul>
<li>Clone or download the project</li>
<li>Open index.html in your browser</li>
<li>OR Run using Live Server in VS Code</li>

</ul> 
📜 License
This project is open-source and free to use for learning purposes.
