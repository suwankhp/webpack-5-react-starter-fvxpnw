import { renderHook, act } from '@testing-library/react';
import useInput from './useInput';

it('should use input', () => {
  const { result } = renderHook(() => useInput(''));

  expect(result.current.value).toBe('');
  expect(typeof result.current.onChange).toBe('function');
});
