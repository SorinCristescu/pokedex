import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeToggle from '..';

const mockSetTheme = jest.fn();

describe('ThemeToggle', () => {
  describe('Render', () => {
    it('should render a toggle component', () => {
      render(<ThemeToggle />); // ARRANGE

      //ACT
      const toggle = screen.getByTestId('toggle');

      expect(toggle).toBeInTheDocument(); // ASSERT
    });
  });
  describe('Behavior', () => {
    // it('should call setTheme when toggle clicked', async () => {
    //   render(<ThemeToggle />); // ARRANGE
    //   //ACT
    //   const toggle = screen.getByTestId('toggle');
    //   await userEvent.click(toggle);
    //   expect(mockSetTheme).toBeCalled(); // ASSERT
    // });
  });
});
