import Filter from '@/components/filter';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('Filter', () => {
  const types = [
    { url: 'url1', name: 'type1' },
    { url: 'url2', name: 'type2' }
  ];

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
      pathname: '/test',
      query: {}
    });
  });
  it('renders without crashing', () => {
    render(<Filter types={types} />);
    const filter = screen.getByTestId('filter');
    expect(filter).toBeInTheDocument();
  });

  it('renders all types', () => {
    render(<Filter types={types} />);
    const options = screen.getAllByRole('option');
    expect(options.length).toBe(3); // 'All' option + 2 types
  });

  it('updates type filter on select change', () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push,
      pathname: '/test',
      query: {}
    });
    render(<Filter types={types} />);
    const select = screen.getByTestId('filter');
    fireEvent.change(select, { target: { value: 'type1' } });
    expect(push).toHaveBeenCalledWith('/test?type=type1');
  });
});
