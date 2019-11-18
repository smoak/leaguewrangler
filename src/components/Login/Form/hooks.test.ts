import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import { useControlledInput, ControlledInput } from './hooks';

describe('.useControlledInput', () => {
  let value: string;
  let onChange: ControlledInput['onChange'];

  beforeEach(() => {
    const HookCallback = () => useControlledInput('');
    const { result } = renderHook(HookCallback);

    value = result.current.value;
    onChange = result.current.onChange;
  });

  describe('.onChange', () => {
    const event = { target: { value: 'foo' } };

    beforeEach(() => {
      const HookCallback = () => useControlledInput('');
      const { result } = renderHook(HookCallback);
      const onChange = result.current.onChange;
      act(() => {
        onChange(event as React.ChangeEvent<HTMLInputElement>);
      });

      value = result.current.value;
    });

    it('updates the value', () => {
      expect(value).toBe('foo');
    });
  });

  it('returns the default value provided', () => {
    expect(value).toBe('');
  });

  it('returns an onChange handler', () => {
    expect(onChange).toBeDefined();
  });
});