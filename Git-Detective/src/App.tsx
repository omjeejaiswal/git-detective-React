



import React, { useState, useEffect } from 'react';
import Profile from './components/Profile';
import SearchBar from './components/SearchBar';
import ToggleMode from './components/ToggleMode';
import './App.css';

const App: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    init();
  }, []);

  const getUserData = (username: string) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error(error));
  };

  const init = () => {
    const value = localStorage.getItem('dark-mode');
    if (value === 'true') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
    getUserData('omjeejaiswal');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('dark-mode', (!darkMode).toString());
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} bg-slate-100 dark:bg-slate-900 min-h-screen`}>
      <div className="container mx-auto p-4">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-neutral-300 text-2xl font-bold">DevDetective</h1>
          <ToggleMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </header>
        <main>
          <SearchBar getUserData={getUserData} />
          {userData && <Profile userData={userData} />}
        </main>
      </div>
    </div>
  );
};

export default App;

