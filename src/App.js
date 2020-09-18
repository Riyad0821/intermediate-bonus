import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

function App() {
  const [likeColor, setLikeColor] = useState('');
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [randomUser, setRandomUser] = useState({});
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .then(data => setUsers(data));
    
    //singleUser
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data => setSingleUser(data));

    //random user
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setRandomUser(data.results[0]));
  }, [])
  const handleLike = () =>{
    const color = likeColor ? '' : 'primary';
    setLikeColor(color);
  }
  return (
    <div className="App">
     <AccessAlarmIcon></AccessAlarmIcon>
     <br/>
     <ThumbUpIcon onClick={handleLike} color={likeColor}></ThumbUpIcon>
     <h1>Name: {singleUser.name}</h1>
  <h2>Random Name: {randomUser.name && randomUser.name.first}</h2>
  <h2>Random Name: {randomUser.name?.first}</h2>
     <h2>Random Gender: {randomUser.gender}</h2>
     {
       users.map(user => <li>{user.name}</li>)
     }
    </div>
  );
}

export default App;
