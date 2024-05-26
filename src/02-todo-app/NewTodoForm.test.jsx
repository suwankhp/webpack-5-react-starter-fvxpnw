import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NewTodoFrom } from './NewTodoForm';
import { text } from 'stream/consumers';
import userEvent from '@testing-library/user-event';

describe('NewTodoForm', () => {
  it('Should create', async () => {
    render(<NewTodoFrom />);
    expect(screen).toBeDefined();
    expect(screen.getByText('New Item')).toBeDefined();
    expect(screen.getByRole('textbox')).toBeDefined();
  });
});
