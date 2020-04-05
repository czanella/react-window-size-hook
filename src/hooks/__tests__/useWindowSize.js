import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useWindowSize } from '../useWindowSize';

const SomeComponent = () => {
  const [width, height] = useWindowSize();

  return (
    <div>
      Width is {width} and height is {height}
    </div>
  )
};

test('useWindowSize should return current window sizes', () => {
  const { getByText } = render(<SomeComponent />);
  expect(
    getByText(`Width is ${window.innerWidth} and height is ${window.innerHeight}`)
  ).toBeInTheDocument();
});

test('useWindowSize should re-render when window resizes', () => {
  const { getByText } = render(<SomeComponent />);

  window.innerWidth = 500;
  window.innerHeight = 500;
  fireEvent(window, new Event('resize'));
  expect(getByText(`Width is 500 and height is 500`)).toBeInTheDocument();

  window.innerWidth = 273;
  window.innerHeight = 456;
  fireEvent(window, new Event('resize'))
  expect(getByText(`Width is 273 and height is 456`)).toBeInTheDocument();
});
