import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '..';

const mockUseDebounceCallback = jest.fn();

describe('Search', () => {
  describe('Render', () => {
    it('should render component', () => {
      render(<Search />); // ARRANGE

      const search = screen.getByTestId('search-bar'); //ACT

      expect(search).toBeInTheDocument(); // ASSERT
    });

    // it('should render search icon', () => {
    //   render(<Search />); // ARRANGE

    //   //ACT
    //   const icon = screen.getByTestId('search-icon');

    //   expect(icon).toBeInTheDocument(); // ASSERT
    // });
  });

  describe('Behavior', () => {
    // it('should be able to add text to the input', async () => {
    //   render(<Search />); // ARRANGE
    //   const input = screen.getByPlaceholderText('Search Pokemon...'); //ACT
    //   await userEvent.type(input, 'bal');
    //   expect(input).toHaveValue('bal'); // ASSERT
    // });
    // it('should call useDebounceCallback when type in input', async () => {
    //   render(<Search />); // ARRANGE
    //   const input = screen.getByPlaceholderText('Search Pokemon...'); //ACT
    //   await userEvent.type(input, 'hey there');
    //   expect(mockUseDebounceCallback).toBeCalled(); // ASSERT
    // });
  });
});
