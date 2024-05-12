import { render, screen, act } from '@testing-library/react';
import { getPokemons } from '@/actions/getPokemons';
import { useIntersectionObserver } from 'usehooks-ts';
import PokemonsList from '@/components/pokemons-list';

jest.mock('@/actions/getPokemons');
jest.mock('usehooks-ts');

describe('PokemonsList', () => {
  const mockPokemons = [
    {
      name: 'pokemon1',
      imageSrc: 'imageSrc1',
      types: [
        {
          slot: 1,
          type: {
            url: 'http://',
            name: 'type1'
          }
        }
      ]
    },
    {
      name: 'pokemon2',
      imageSrc: 'imageSrc2',
      types: [
        {
          slot: 1,
          type: {
            url: 'http://',
            name: 'type1'
          }
        }
      ]
    }
  ];

  beforeEach(() => {
    (getPokemons as jest.Mock).mockResolvedValue(mockPokemons);
    (useIntersectionObserver as jest.Mock).mockReturnValue({
      isIntersecting: false,
      ref: jest.fn()
    });
  });
  it('renders without crashing', () => {
    render(<PokemonsList initialPokemons={mockPokemons} />);
    const list = screen.getByTestId('pokemons-list');
    expect(list).toBeInTheDocument();
  });

  it('renders initial pokemons', () => {
    render(<PokemonsList initialPokemons={mockPokemons} />);
    const cards = screen.getAllByTestId('card');
    expect(cards.length).toBe(2);
  });

  it('displays a loader when loading', () => {
    render(<PokemonsList initialPokemons={mockPokemons} />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });
});
