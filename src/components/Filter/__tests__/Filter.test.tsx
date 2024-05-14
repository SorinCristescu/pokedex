import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Filter from '..';

const mockUseRouter = jest.fn();

const mockTypes = [
  {
    name: 'fire',
    url: 'http://localhost:3000/fire'
  },
  {
    name: 'water',
    url: 'http://localhost:3000/water'
  },
  {
    name: 'grass',
    url: 'http://localhost:3000/grass'
  },
  {
    name: 'electric',
    url: 'http://localhost:3000/electric'
  },
  {
    name: 'ice',
    url: 'http://localhost:3000/ice'
  },
  {
    name: 'fighting',
    url: 'http://localhost:3000/fighting'
  },
  {
    name: 'poison',
    url: 'http://localhost:3000/poison'
  }
];
describe('Filter', () => {
  describe('Render', () => {
    it('should render component', () => {
      render(<Filter types={mockTypes} />); // ARRANGE

      const filter = screen.getByTestId('filter'); //ACT

      expect(filter).toBeInTheDocument(); // ASSERT
    });

    //   it('should render correct number of select items', () => {
    //     render(<Filter types={mockTypes} />); // ARRANGE

    //     //ACT
    //     const items = screen.getAllByTestId('select-item');

    //     expect(items).toHaveLength(7); // ASSERT
    //   });
    // });

    // describe('Behavior', () => {
    //   it('should be able to select a type', async () => {
    //     render(<Filter types={mockTypes} />); // ARRANGE

    //     const items = screen.getAllByTestId('select-item'); //ACT
    //     await userEvent.click(items[0]);
    //     expect(mockUseRouter).toBeCalled(); // ASSERT
    //   });
  });
});
