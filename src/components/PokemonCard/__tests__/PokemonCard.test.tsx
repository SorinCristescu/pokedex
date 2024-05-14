import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PokemonCard from '..';

const mockRouterPush = jest.fn();

const mockPokemon = {
  imageSrc:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  name: 'Bulbasaur',
  types: [
    {
      slot: 1,
      type: {
        url: 'https://pokeapi.co/api/v2/type/12/',
        name: 'grass'
      }
    },
    {
      slot: 2,
      type: {
        url: 'https://pokeapi.co/api/v2/type/4/',
        name: 'poison'
      }
    }
  ]
};

describe('PokemonCard', () => {
  describe('Render', () => {
    it('should render a card', () => {
      render(<PokemonCard pokemon={mockPokemon} />); // ARRANGE

      //ACT
      const card = screen.getByTestId('card');

      expect(card).toBeInTheDocument(); // ASSERT
    });

    it('should render a label', () => {
      render(<PokemonCard pokemon={mockPokemon} />); // ARRANGE

      //ACT
      const label = screen.getByTestId('card-label');

      expect(label).toBeInTheDocument(); // ASSERT
    });

    it('should render a image', () => {
      render(<PokemonCard pokemon={mockPokemon} />); // ARRANGE

      //ACT
      const pokemonImage = screen.getByAltText('Bulbasaur');

      expect(pokemonImage).toBeInTheDocument(); // ASSERT
    });
  });

  describe('Behavior', () => {
    it('should call setTodos when checkbox clicked', async () => {
      render(<PokemonCard pokemon={mockPokemon} />); // ARRANGE

      //ACT
      const card = screen.getByTestId('card');
      await userEvent.click(card);

      expect(mockRouterPush).toBeCalled(); // ASSERT
      fireEvent.click(card);
      expect(mockRouterPush).toHaveBeenCalledWith('/pokemon/bulbasaur');
    });
  });
});
