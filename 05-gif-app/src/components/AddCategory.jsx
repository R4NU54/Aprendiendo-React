import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    setInputValue('');
    onNewCategory(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search...'
        value={inputValue}
        onChange={handleInputChange}
      />
      {/* <button type='submit'>Search</button> */}
    </form>
  );
};
