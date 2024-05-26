import { render, screen, fireEvent } from '@testing-library/react';
import { jest } from '@jest/globals';
import '@testing-library/jest-dom';
import { TodoItem } from './TodoItem';

describe('TodoItem', () => {
  it('Should create', async () => {
    render(<TodoItem id={1} completed={false} title="TodoItem" />);
    const input = await screen.findByRole('checkbox');
    // console.log(input)

    expect(input).toBeDefined();
  });
});
