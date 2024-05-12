import { render, screen } from '@testing-library/react';
import { SkeletonCard } from '@/components/skeleton-card';

describe('SkeletonCard', () => {
  it('renders without crashing', () => {
    render(<SkeletonCard />);
    const skeletonElements = screen.getAllByRole('figure');
    expect(skeletonElements.length).toBe(2);
  });

  it('renders correct skeleton shapes', () => {
    render(<SkeletonCard />);
    const [skeletonOne, skeletonTwo] = screen.getAllByRole('figure');
    expect(skeletonOne).toHaveClass('h-4 w-[250px]');
    expect(skeletonTwo).toHaveClass('w-[170px] rounded-xl');
  });
});
