import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-summit-500 text-summit-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="font-bold text-xl">Sikkim&nbsp;Summit</Link>
        <nav className="space-x-4">
          <Link href="/culture">Culture</Link>
          <Link href="/food">Food</Link>
          <Link href="/travel">Travel</Link>
        </nav>
      </div>
    </header>
  );
}
