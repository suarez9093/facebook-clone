import firebase from 'firebase';
import React, { useState } from 'react';
import db, { auth, provider } from '../firebase';
const context = React.createContext();

function ContextProvider({ children }) {
  const [message, setMessage] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [user, setUser] = useState(null);
  const [isLoginError, setIsLoginError] = useState('');
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({});

  const signIn = async (e) => {
    try {
      const response = await auth.signInWithPopup(provider);
      console.log(response);
      setUser(response.user);
    } catch (error) {
      console.error(error);
      setIsLoginError(error.message);
      console.log(isLoginError);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'message':
        setMessage(value);
        break;
      case 'imageURL':
        setImageURL(value);
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageURL,
    });
    setMessage('');
    setImageURL('');
  };

  return (
    <context.Provider
      value={{
        setPosts,
        posts,
        isLoginError,
        signIn,
        user,
        imageURL,
        handleChange,
        handleSubmit,
        message,
        setMessage,
        setImageURL,
      }}
    >
      {children}
    </context.Provider>
  );
}

export { ContextProvider, context };
