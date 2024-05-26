import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

it('should use counter', () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.count).toBe(0);
  expect(typeof result.current.increment).toBe('function');
  expect(typeof result.current.decrement).toBe('function');
});
