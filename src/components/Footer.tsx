import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border-footer mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Tagline */}
          <div>
            <div className="flex items-center gap-0 mb-2">
              <span className="font-heading text-lg font-bold text-foreground">smoothiebar</span>
              <span className="font-heading text-lg font-bold text-accent">.cards</span>
            </div>
            <p className="text-sm text-secondary max-w-md">
              Curated smoothie recipes for people who want more than just &quot;blend some fruit.&quot;
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-secondary">
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <a
              href="mailto:hello@smoothiebar.cards"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border-footer flex items-center justify-between">
          <p className="text-xs text-tertiary">
            &copy; {new Date().getFullYear()} smoothiebar.cards
          </p>
          <div className="flex items-center gap-4 text-xs text-tertiary">
            <span>Instagram</span>
            <span>Pinterest</span>
            <span>X / Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
