import SearchBar from '@/components/search';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('SearchBar', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
      pathname: '/test',
      query: {}
    });
  });

  it('renders without crashing', () => {
    render(<SearchBar />);
    const searchBar = screen.getByTestId('search');
    expect(searchBar).toBeInTheDocument();
  });
  it('updates search text on input change', () => {
    render(<SearchBar />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });

  it('calls router.push with correct query on input change', () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push,
      pathname: '/test',
      query: {}
    });
    render(<SearchBar />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(push).toHaveBeenCalledWith('/test?search=test');
  });
});
