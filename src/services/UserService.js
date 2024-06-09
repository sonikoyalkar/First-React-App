class UserService {
  async getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
}

export default new UserService();