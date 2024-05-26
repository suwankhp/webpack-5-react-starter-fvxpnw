import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TodoList } from './TodoList';

describe('TodoList', () => {
  it('Should create', () => {
    render(<TodoList todos={[]} />);
    expect(screen).toBeDefined();
    expect(screen.getByText('No Todos')).toBeDefined();
  });
});
