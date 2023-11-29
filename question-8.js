// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const endpoint = 'https://jsonplaceholder.typicode.com/users';

fetch(endpoint)
  .then(response => response.json())
  .then(users => {
    const newUsers = users.map(user => user.name);

    console.log(newUsers);
  })
  .catch(error => console.error('Error fetching data:', error));