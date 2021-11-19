import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeThumbnail from './MemeThumbnail';

describe('<MemeThumbnail />', () => {
  test('it should mount', () => {
    render(<MemeThumbnail />);
    
    const MemeThumbnail = screen.getByTestId('MemeThumbnail');

    expect(MemeThumbnail).toBeInTheDocument();
  });
});