import PokemonCard from '@/components/pokemon-card';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('PokemonCard', () => {
  const pokemon = {
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
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn()
    });
  });
  it('renders without crashing', () => {
    render(<PokemonCard pokemon={pokemon} />);
    const card = screen.getByRole('button');
    expect(card).toBeInTheDocument();
  });

  it('renders pokemon name and image', () => {
    render(<PokemonCard pokemon={pokemon} />);
    const name = screen.getByText('Pokemon1');
    const image = screen.getByAltText('pokemon1');
    expect(name).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it('navigates to correct route on click', () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push
    });
    render(<PokemonCard pokemon={pokemon} />);
    const card = screen.getByRole('button');
    fireEvent.click(card);
    expect(push).toHaveBeenCalledWith('/pokemon/pokemon1');
  });
});
