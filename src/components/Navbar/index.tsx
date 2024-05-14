import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '../ThemeToggle';

export const Navbar = () => {
  return (
    <header data-testid="header" className="fixed w-full bg-background z-10">
      <nav
        className="mx-auto container flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <span className="sr-only">Your Logo</span>
            <Image
              width={100}
              height={250}
              src="/images/pokemon-logo.png"
              alt="Logo image"
            />
          </Link>
        </div>
        <div className="flex">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
