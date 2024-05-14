import { render, screen } from '@testing-library/react';
import PokemonsList from '..';

const mockUseDebounceCallback = jest.fn();
const mockPokemons = [
  {
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
  },
  {
    imageSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
    name: 'Ivysaur',
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
  }
];

describe('PokemonsList', () => {
  // it('should render "No Pokemon found!" when the array is empty', () => {
  //   render(<PokemonsList initialPokemons={[]} />); // ARRANGE
  //   //ACT
  //   const message = screen.getByText('No Pokemon found!');
  //   expect(message).toBeInTheDocument(); // ASSERT
  // });
  // it('should render a list with the correct number of items', () => {
  //   render(<PokemonsList initialPokemons={mockPokemons} />); // ARRANGE
  //   //ACT
  //   const pokemonsArray = screen.getAllByRole('article');
  //   expect(pokemonsArray.length).toBe(2); // ASSERT
  // });
  // it('should render the pokemons in the correct order', () => {
  //   render(<PokemonsList initialPokemons={mockPokemons} />); // ARRANGE
  //   //ACT
  //   const firstItem = screen.getAllByTestId('card-label')[0];
  //   expect(firstItem).toHaveTextContent('Bulbasaur'); // ASSERT
  // });
});
