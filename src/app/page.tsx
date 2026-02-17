import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothieGrid from '@/components/SmoothieGrid';
import { getAllSmoothies, sortSmoothies } from '@/lib/smoothies';
import { ALL_GOALS, ALL_FLAVORS, ALL_DIETS, goalLabels, flavorLabels, dietLabels, goalIcons, flavorIcons } from '@/lib/constants';
import { goalColors, flavorColors } from '@/lib/colors';
import { getIcon } from '@/lib/icons';

export const metadata: Metadata = {
  title: 'SmoothieBarGuide — Curated Smoothie & Juice Recipes',
  description:
    'Browse 80+ curated smoothie and juice recipes. Filter by goal, flavor, or diet. Full nutrition info, ingredients, and step-by-step blending instructions.',
};

export default function HomePage() {
  const allSmoothies = getAllSmoothies();
  const featured = sortSmoothies(
    allSmoothies.filter((s) => s.featured),
    'popular'
  ).slice(0, 6);
  const popular = sortSmoothies(allSmoothies, 'popular').slice(0, 6);

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 pt-10 pb-20">
        {/* Hero */}
        <section className="text-center mb-14">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Smoothie recipes<br />
            <span className="text-accent">worth blending.</span>
          </h1>
          <p className="text-base text-secondary max-w-lg mx-auto">
            Curated recipes with real nutrition info, step-by-step instructions, and smart filters. No fluff, no filler — just good smoothies.
          </p>
        </section>

        {/* Browse by Goal */}
        <section className="mb-14">
          <h2 className="font-heading text-xl font-bold text-foreground mb-5">Browse by Goal</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ALL_GOALS.map((goal) => {
              const colors = goalColors[goal];
              const Icon = getIcon(goalIcons[goal]);
              return (
                <Link
                  key={goal}
                  href={`/goal/${goal}`}
                  className="flex items-center gap-3 p-4 rounded-2xl border border-border bg-card hover:shadow-card-hover transition-shadow"
                >
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      backgroundColor: colors.bg,
                    }}
                  >
                    <Icon size={20} style={{ color: colors.text }} />
                  </div>
                  <span className="font-heading text-sm font-semibold text-foreground">
                    {goalLabels[goal]}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Browse by Flavor */}
        <section className="mb-14">
          <h2 className="font-heading text-xl font-bold text-foreground mb-5">Browse by Flavor</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ALL_FLAVORS.map((flavor) => {
              const colors = flavorColors[flavor];
              const Icon = getIcon(flavorIcons[flavor]);
              return (
                <Link
                  key={flavor}
                  href={`/flavor/${flavor}`}
                  className="flex items-center gap-3 p-4 rounded-2xl border border-border bg-card hover:shadow-card-hover transition-shadow"
                >
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      backgroundColor: colors.bg,
                    }}
                  >
                    <Icon size={20} style={{ color: colors.text }} />
                  </div>
                  <span className="font-heading text-sm font-semibold text-foreground">
                    {flavorLabels[flavor]}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Browse by Diet */}
        <section className="mb-14">
          <h2 className="font-heading text-xl font-bold text-foreground mb-5">Browse by Diet</h2>
          <div className="flex flex-wrap gap-2">
            {ALL_DIETS.map((diet) => (
              <Link
                key={diet}
                href={`/diet/${diet}`}
                className="px-4 py-2 rounded-full text-sm font-medium border border-border bg-card hover:shadow-card-hover transition-shadow text-foreground"
              >
                {dietLabels[diet]}
              </Link>
            ))}
          </div>
        </section>

        {/* Featured */}
        {featured.length > 0 && (
          <section className="mb-14">
            <h2 className="font-heading text-xl font-bold text-foreground mb-5">Featured Recipes</h2>
            <SmoothieGrid smoothies={featured} />
          </section>
        )}

        {/* Popular */}
        <section className="mb-14">
          <h2 className="font-heading text-xl font-bold text-foreground mb-5">Most Popular</h2>
          <SmoothieGrid smoothies={popular} />
        </section>
      </main>
      <Footer />
    </>
  );
}
