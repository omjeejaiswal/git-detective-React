import React from 'react';

interface ToggleModeProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ToggleMode: React.FC<ToggleModeProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <div id="btn-mode" className="flex items-center space-x-2 cursor-pointer" onClick={toggleDarkMode}>
      <p id="mode-text">{darkMode ? 'LIGHT' : 'DARK'}</p>
      <div className="icon-container">
        <img id="mode-icon" src={`./src/assets/images/${darkMode ? 'sun' : 'moon'}-icon.svg`} alt="" />
      </div>
    </div>
  );
};

export default ToggleMode;
