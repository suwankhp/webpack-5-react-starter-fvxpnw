import { useState } from 'react';

export const NewTodoFrom = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === '') return;

    onSubmit(value);

    setValue('');
  };

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn" data-testid="add-button">
        Add
      </button>
    </form>
  );
};
