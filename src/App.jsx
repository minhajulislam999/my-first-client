import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/allUsers")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
     

      {users.map(user => (
      <p key={user.id}>{user.name}</p>
    ))}

     

     
    </>
  )
}

export default App
