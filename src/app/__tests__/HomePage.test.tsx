import { render, screen } from '@testing-library/react';
import Home from '../page';

const mockSearchParams = {
  name: 'bulbasaur',
  type: 'poison'
};

describe('HomePage', () => {
  describe('Render', () => {
    // it('should render page', () => {
    //   render(<Home searchParams={mockSearchParams} />); // ARRANGE
    //   //ACT
    //   const page = screen.getByTestId('home-page');
    //   expect(page).toBeInTheDocument(); // ASSERT
    // });
    // it('should render a description', () => {
    //   render(<Home searchParams={mockSearchParams} />); // ARRANGE
    //   //ACT
    //   const text = screen.getByText('Bulbasaur');
    //   expect(text).toBeInTheDocument(); // ASSERT
    // });
    // it('should render filter', () => {
    //   render(<Home searchParams={mockSearchParams} />); // ARRANGE
    //   //ACT
    //   const filter = screen.getByTestId('filter');
    //   expect(filter).toBeInTheDocument(); // ASSERT
    // });
  });
});
