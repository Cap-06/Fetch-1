function storeData() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
  
    if (name && age) {
      const userData = { name, age };
      localStorage.setItem('userData', JSON.stringify(userData));
      alert('Data stored successfully!');
    } else {
      alert('Please enter both name and age.');
    }
  }
  
  function retrieveAndDisplayData() {
    const storedData = localStorage.getItem('userData');
  
    if (storedData) {
      const userData = JSON.parse(storedData);
      const displayArea = document.getElementById('displayArea');
      displayArea.textContent = `Name: ${userData.name}, Age: ${userData.age}`;
    } else {
      alert('No data found in Local Storage.');
    }
  }
  