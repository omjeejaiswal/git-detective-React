import React, { useEffect, useState } from "react"
import ToggelMode from "./components/ToggleMode";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";
import './App.css'


const App: React.FC = () => {
    const [userData, setUserData] = useState<any>(null);
    const [darkmode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
      init();
    }, []);


    const getUserData = (username: string) => {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error(error));
    };

    const init = () =>{
      const value = localStorage.getItem('dark-mode');
      if(value === 'true') {
        setDarkMode(true);
      } else{
        setDarkMode(false);
      }
      getUserData('omjeejaiswal')
    }

    const toggleDarkMode = () => {
      setDarkMode(!darkmode); 
      localStorage.setItem('dark-mode', (!darkmode).toString())
    }


    return (
      <div className={`${darkmode ? 'dark' : ''} bg-gray-100 dark:bg-gray min-h-screen`}>
        <div className="container mx-auto p-4">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Git Detective </h1>
            <ToggelMode darkmode={darkmode} toggleDarkMode = {toggleDarkMode}/>
          </header>
          <main>
            <SearchBar getUserData={getUserData}/>
            {userData && <Profile userData = {userData} />} 
          </main>
        </div>
      </div>
    );
};

export default App
