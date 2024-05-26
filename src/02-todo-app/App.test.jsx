import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  it('Should create', () => {
    render(<App />);

    const element = screen.getByText('Todo List');

    expect(element).toBeDefined();
  });
});
