import { render, screen } from '@testing-library/react';
import { Navbar } from '@/components/navbar';
import Image from 'next/image';
import { useRouter } from 'next/router';
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  }
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('Navbar', () => {
  it('renders without crashing', () => {
    render(<Navbar />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('displays the logo image correctly', () => {
    render(<Navbar />);
    const logoImage = screen.getByAltText('Logo image');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/images/pokemon-logo.png');
  });
});
