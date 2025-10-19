// Create a Fetch class with async methods
export default class FetchFromURL {
  constructor(url) {
    this.url = url;
  }

  // Method to fetch all the objects
  // Takes the target to fetch (todo or user)
  async fetchAll(target) {
    // Check if target param is correctly provided
    if (target !== "todo" && target !== "user") {
      throw new Error("Please provide the target. Available targets: todo, user");
    }

    const response = await fetch(`${this.url}${target}/ `);

    if (response.ok) {
      return response.json();
    } else {
      throw new Error (`Failed to fetch data: ${response.status} ${response.statusText}`);
    }
  }

  // Method to fetch object by id
  async fetchById(target, id) {
    // Check if target param is correctly provided
    if (target !== "todo" || target !== "user") {
      throw new Error("Please provide the target. Available targets: todo, user");
    }

    // Check if id param is correctly provided
    if (!id || typeof id !== "number") {
      throw new Error("Please provide the 'id' parameter as a number");
    }

    const response = await fetch(`${this.url}${target}/${id} `);

    if (response.ok) {
      return response.json();
    } else {
      throw new Error (`Failed to fetch data: ${response.status} ${response.statusText}`);
    }
  }
}