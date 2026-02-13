import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Diet } from '@/types/smoothie';
import { filterSmoothies, sortSmoothies } from '@/lib/smoothies';
import { ALL_DIETS, dietLabels, dietPageTitles, dietIntros } from '@/lib/constants';
import { collectionStructuredData, breadcrumbStructuredData } from '@/lib/seo';
import BrowsePage from '@/components/BrowsePage';

interface PageProps {
  params: Promise<{ diet: string }>;
}

export async function generateStaticParams() {
  return ALL_DIETS.map((diet) => ({ diet }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { diet } = await params;
  if (!ALL_DIETS.includes(diet as Diet)) return {};

  const d = diet as Diet;
  return {
    title: dietPageTitles[d],
    description: dietIntros[d].slice(0, 155) + '...',
  };
}

export default async function DietPage({ params }: PageProps) {
  const { diet } = await params;
  if (!ALL_DIETS.includes(diet as Diet)) notFound();

  const d = diet as Diet;
  const smoothies = sortSmoothies(filterSmoothies({ diet: d }), 'popular');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionStructuredData(
            dietPageTitles[d],
            dietIntros[d],
            `/diet/${d}`
          )),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData([
            { name: 'Home', url: '/' },
            { name: dietLabels[d], url: `/diet/${d}` },
          ])),
        }}
      />
      <BrowsePage
        title={dietPageTitles[d]}
        intro={dietIntros[d]}
        smoothies={smoothies}
        breadcrumbs={[{ label: 'Diets' }, { label: dietLabels[d] }]}
      />
    </>
  );
}
