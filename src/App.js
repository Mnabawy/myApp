import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import './App.css';
import Avatar from './components/avatar';
import UserInfo from './components/UserInfo';
import Comment from './components/comment';
// import Comment from './components/comment';

function App(props) {
  const author = {
    avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    name: 'marc'
  }
  const text = 'lorem ipsum'
  return (
    <div className="App">
      <Comment
        user={author}
        text={text}
      />
    </div>
  );
}

export default App;
