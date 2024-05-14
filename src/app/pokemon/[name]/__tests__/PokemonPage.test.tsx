import { render, screen } from '@testing-library/react';
import PokemonPage from '../page';

const mockRouterPush = jest.fn();

const mockParams = {
  name: 'bulbasaur'
};

describe('PokemonPage', () => {
  describe('Render', () => {
    // it('should render a title', () => {
    //   render(<PokemonPage params={mockParams} />); // ARRANGE
    //   //ACT
    //   const title = screen.getByTestId('title');
    //   expect(title).toBeInTheDocument(); // ASSERT
    // });
    // it('should render a description', () => {
    //   render(<PokemonPage params={mockParams} />); // ARRANGE
    //   //ACT
    //   const description = screen.getByTestId('description');
    //   expect(description).toBeInTheDocument(); // ASSERT
    // });
    // it('should render a pokemon image', () => {
    //   render(<PokemonPage params={mockParams} />); // ARRANGE
    //   //ACT
    //   const pokemonImage = screen.getByAltText('Bulbasaur');
    //   expect(pokemonImage).toBeInTheDocument(); // ASSERT
    // });
  });
});
