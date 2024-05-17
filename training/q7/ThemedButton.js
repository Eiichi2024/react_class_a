import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <button style={styles} onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemedButton;