
import Link from 'next/link';
import { Typography } from '@/components/ui/Typography';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { SiteConfig } from '@/lib/site-config';
import Image from 'next/image';
import { AuthButton } from '@/features/AuthButton';

export function Header() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center ">
        <div className="flex gap-2 md:gap-10">
            <Image src="/images/logo.svg" width={50} height={35} alt="app logo"></Image>
          <Typography variant="h3" as={Link} href="/">
            {SiteConfig.title}
          </Typography>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <AuthButton/>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}