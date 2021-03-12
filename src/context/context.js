import React, { useState } from 'react';
const context = React.createContext();

function ContextProvider({ children }) {
  const [message, setMessage] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [user, setUser] = useState(null);

  const signIn = (e) => {};
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

    setMessage('');
    setImageURL('');
  };

  return (
    <context.Provider
      value={{
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
