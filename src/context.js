import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [zoom, setZoom] = useState(5);
  const [position, setPosition] = useState([35.15, -90]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowWidth);
  }, []);

  const handleWindowWidth = () => {
    const width = window.innerWidth;
    if (width >= 768) {
      document.body.style.overflow = 'unset';
      setIsSidebarOpen(false);
    }
    if (width > 1000) {
      setZoom(6);
    } else {
      setZoom(5);
    }
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleName = (e) => {
    setName(e.target.value);
    if (e.target.value || name) {
      setNameError(false);
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value || email) {
      setEmailError(false);
    }
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
    if (e.target.value || message) {
      setMessageError(false);
    }
  };

  const handelForm = () => {
    if (!name) {
      setNameError(true);
    }
    if (!email) {
      setEmailError(true);
    }
    if (!message) {
      setMessageError(true);
    }

    if (name && email && message) {
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  const setAtlanta = () => {
    setPosition([33.75, -84.38]);
    setZoom(8);
  };

  const setDallas = () => {
    setPosition([32.78, -96.8]);
    setZoom(8);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        name,
        email,
        message,
        handelForm,
        handleEmail,
        handleName,
        handleMessage,
        nameError,
        emailError,
        messageError,
        zoom,
        position,
        setAtlanta,
        setDallas,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext, AppContext };
