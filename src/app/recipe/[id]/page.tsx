import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import HeroIcon from '@/components/HeroIcon';
import GoalBadge from '@/components/GoalBadge';
import DietTags from '@/components/DietTags';
import NutritionPanel from '@/components/NutritionPanel';
import StepTimeline from '@/components/StepTimeline';
import SimilarSmoothies from '@/components/SimilarSmoothies';
import { getAllSmoothies, getSmoothieById, getSimilarSmoothies } from '@/lib/smoothies';
import { goalLabels, flavorLabels } from '@/lib/constants';
import { smoothieMetaTitle, smoothieMetaDescription, smoothieStructuredData, breadcrumbStructuredData } from '@/lib/seo';
import { flavorColors } from '@/lib/colors';
import { Clock, Users } from 'lucide-react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getAllSmoothies().map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const smoothie = getSmoothieById(id);
  if (!smoothie) return {};

  return {
    title: smoothieMetaTitle(smoothie),
    description: smoothieMetaDescription(smoothie),
  };
}

export default async function RecipePage({ params }: PageProps) {
  const { id } = await params;
  const smoothie = getSmoothieById(id);
  if (!smoothie) notFound();

  const similar = getSimilarSmoothies(smoothie, 4);
  const flavorColor = flavorColors[smoothie.flavor];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(smoothieStructuredData(smoothie)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData([
            { name: 'Home', url: '/' },
            { name: goalLabels[smoothie.goal], url: `/goal/${smoothie.goal}` },
            { name: smoothie.name, url: `/recipe/${smoothie.id}` },
          ])),
        }}
      />

      <Header />
      <main className="max-w-3xl mx-auto px-4 pt-8 pb-20">
        <Breadcrumbs
          items={[
            { label: goalLabels[smoothie.goal], href: `/goal/${smoothie.goal}` },
            { label: smoothie.name },
          ]}
        />

        {/* Hero section */}
        <div className="flex items-start gap-5 mb-6">
          <HeroIcon icon={smoothie.heroIcon} color={smoothie.heroColor} size="detail" />
          <div className="flex-1 min-w-0">
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-tight mb-2">
              {smoothie.name}
            </h1>
            <p className="text-base text-secondary leading-relaxed">
              {smoothie.tagline}
            </p>
          </div>
        </div>

        {/* Meta badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <GoalBadge goal={smoothie.goal} size="md" />
          <Link
            href={`/flavor/${smoothie.flavor}`}
            className="inline-block rounded-full text-xs px-3 py-1 font-medium hover:opacity-80 transition-opacity"
            style={{ backgroundColor: flavorColor.bg, color: flavorColor.text }}
          >
            {flavorLabels[smoothie.flavor]}
          </Link>
          <div className="flex items-center gap-1 text-xs text-secondary">
            <Clock size={14} />
            <span>{smoothie.prepTime}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-secondary">
            <Users size={14} />
            <span>{smoothie.servings} serving{smoothie.servings > 1 ? 's' : ''}</span>
          </div>
        </div>

        {/* Diet tags */}
        {smoothie.diet.length > 0 && (
          <div className="mb-8">
            <DietTags diets={smoothie.diet} size="md" />
          </div>
        )}

        {/* Nutrition */}
        <section className="mb-10">
          <h2 className="font-heading text-lg font-bold text-foreground mb-4">Nutrition per serving</h2>
          <NutritionPanel nutrition={smoothie.nutrition} />
        </section>

        {/* Ingredients */}
        <section className="mb-10">
          <h2 className="font-heading text-lg font-bold text-foreground mb-4">Ingredients</h2>
          <ul className="space-y-2">
            {smoothie.ingredients.map((ing, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <span className="text-lg">{ing.emoji}</span>
                <span className="text-foreground font-medium">{ing.name}</span>
                <span className="text-secondary ml-auto text-xs">{ing.amount}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Steps */}
        <section className="mb-10">
          <h2 className="font-heading text-lg font-bold text-foreground mb-4">How to make it</h2>
          <StepTimeline steps={smoothie.steps} size="lg" />
        </section>

        {/* Pro tip */}
        {smoothie.tip && (
          <section className="mb-10 p-5 rounded-2xl bg-card border border-border">
            <h3 className="font-heading text-sm font-bold text-foreground mb-1.5">Pro tip</h3>
            <p className="text-sm text-secondary leading-relaxed">{smoothie.tip}</p>
          </section>
        )}

        {/* Variations */}
        {smoothie.variations.length > 0 && (
          <section className="mb-10">
            <h2 className="font-heading text-lg font-bold text-foreground mb-4">Variations</h2>
            <ul className="space-y-2">
              {smoothie.variations.map((v, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-secondary">
                  <span className="text-accent mt-0.5">&#8226;</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Similar */}
        <section className="mt-14">
          <SimilarSmoothies smoothies={similar} />
        </section>
      </main>
      <Footer />
    </>
  );
}
