import React, { useState } from 'react';

interface SearchBarProps {
  getUserData: (username: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ getUserData }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSearch = () => {
    if (inputValue) {
      getUserData(inputValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue) {
      getUserData(inputValue);
    }
  };

  return (
    <div className="searchbar-container relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-2 flex items-center space-x-2 mb-8">
      <input
        type="search"
        name="user-input"
        id="input"
        placeholder="Enter a GitHub username..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-transparent outline-none text-gray-800 dark:text-gray-200 flex-grow"
      />
      <button onClick={handleSearch} className="btn-search bg-blue-500 text-white px-4 py-2 rounded-lg">
        Search
      </button>
      <div className="error text-red-500 font-bold hidden">no search results</div>
    </div>
  );
};

export default SearchBar;
