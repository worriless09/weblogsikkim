// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-summit-700 text-summit-100 py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sikkim Summit Blog. All rights reserved.
        </p>
        <nav className="space-x-4 mt-2 md:mt-0">
          <a 
            href="/about" 
            className="hover:text-accent transition-colors duration-200"
            aria-label="About"
          >
            About
          </a>
          <a 
            href="/contact" 
            className="hover:text-accent transition-colors duration-200"
            aria-label="Contact"
          >
            Contact
          </a>
          <a 
            href="https://twitter.com/yourhandle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-200"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a 
            href="https://instagram.com/yourhandle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-200"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </nav>
      </div>
    </footer>
  );
}
