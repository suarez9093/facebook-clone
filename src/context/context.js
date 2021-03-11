import React, { useState } from 'react';
const context = React.createContext();

function ContextProvider({ children }) {
  const [message, setMessage] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'message':
        setMessage(value);
        console.log(name);
        break;
      case 'imageURL':
        setImageURL(value);
        console.log(name);
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
