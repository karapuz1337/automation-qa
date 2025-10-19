// Complete the same as task2.js but with async/await
// Import both functions from task2.js
import { fetchTodoById, fetchUserById } from "./task2.js";

// Use .all method
const allResponses = await Promise.all([
  fetchTodoById(1),
  fetchUserById(1)
]);

// Use .race method
const firstResponse = await Promise.race([
  fetchTodoById(1),
  fetchUserById(1)
]);

// Wait for both methods to resolve, then print the data
console.log("All responses:", JSON.stringify(allResponses));

console.log("First response:", JSON.stringify(firstResponse));
