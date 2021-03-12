import React, { useContext } from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import { context } from './context/context';

function App() {
  const { user, isLoginError } = useContext(context);
  return (
    <div className='app'>
      {isLoginError && <p>{isLoginError}</p>}
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className='app__body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
