import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UI } from './ui';

describe('UI', () => {
  it('should create', () => {
    render(<UI />);
  });
});
