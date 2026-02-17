import Link from 'next/link';
import { Search, Dices } from 'lucide-react';
import { ALL_GOALS, ALL_FLAVORS, ALL_DIETS, goalLabels, flavorLabels, dietLabels } from '@/lib/constants';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-0">
            <span className="font-heading text-lg font-bold text-foreground">SmoothieBar</span>
            <span className="font-heading text-lg font-bold text-accent">Guide</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-secondary">
            <div className="group relative">
              <span className="cursor-pointer hover:text-foreground transition-colors">Goals</span>
              <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
                <div className="bg-card rounded-xl shadow-card-hover border border-border p-3 min-w-[180px]">
                  {ALL_GOALS.map((goal) => (
                    <Link
                      key={goal}
                      href={`/goal/${goal}`}
                      className="block px-3 py-1.5 text-sm text-secondary hover:text-foreground hover:bg-background rounded-lg transition-colors"
                    >
                      {goalLabels[goal]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="group relative">
              <span className="cursor-pointer hover:text-foreground transition-colors">Flavors</span>
              <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
                <div className="bg-card rounded-xl shadow-card-hover border border-border p-3 min-w-[180px]">
                  {ALL_FLAVORS.map((flavor) => (
                    <Link
                      key={flavor}
                      href={`/flavor/${flavor}`}
                      className="block px-3 py-1.5 text-sm text-secondary hover:text-foreground hover:bg-background rounded-lg transition-colors"
                    >
                      {flavorLabels[flavor]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="group relative">
              <span className="cursor-pointer hover:text-foreground transition-colors">Diets</span>
              <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
                <div className="bg-card rounded-xl shadow-card-hover border border-border p-3 min-w-[180px]">
                  {ALL_DIETS.map((diet) => (
                    <Link
                      key={diet}
                      href={`/diet/${diet}`}
                      className="block px-3 py-1.5 text-sm text-secondary hover:text-foreground hover:bg-background rounded-lg transition-colors"
                    >
                      {dietLabels[diet]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/random"
              className="flex items-center gap-1.5 text-sm text-secondary hover:text-foreground transition-colors"
              title="Random smoothie"
            >
              <Dices size={18} />
              <span className="hidden sm:inline">Surprise me</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
