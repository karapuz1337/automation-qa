// Create a function to fetch the Todo object by id
export const fetchTodoById = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => response.json())
    .catch(err => console.log(err));
};

// Create a function to fetch the User object by id
export const fetchUserById = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .catch(err => console.log(err));
};

// Use .all method
const allResponses = Promise.all([
  fetchTodoById(1),
  fetchUserById(1)
]);

// Use .race method
const firstResponse = Promise.race([
  fetchTodoById(1),
  fetchUserById(1)
]);

// Wait for both methods to resolve, then print the data
allResponses.then(data => {
  console.log("All responses:", JSON.stringify(data));
});
firstResponse.then(data => {
  console.log("First response:", JSON.stringify(data));
});
