import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Flavor } from '@/types/smoothie';
import { filterSmoothies, sortSmoothies } from '@/lib/smoothies';
import { ALL_FLAVORS, flavorLabels, flavorPageTitles, flavorIntros } from '@/lib/constants';
import { collectionStructuredData, breadcrumbStructuredData } from '@/lib/seo';
import BrowsePage from '@/components/BrowsePage';

interface PageProps {
  params: Promise<{ flavor: string }>;
}

export async function generateStaticParams() {
  return ALL_FLAVORS.map((flavor) => ({ flavor }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { flavor } = await params;
  if (!ALL_FLAVORS.includes(flavor as Flavor)) return {};

  const f = flavor as Flavor;
  return {
    title: flavorPageTitles[f],
    description: flavorIntros[f].slice(0, 155) + '...',
  };
}

export default async function FlavorPage({ params }: PageProps) {
  const { flavor } = await params;
  if (!ALL_FLAVORS.includes(flavor as Flavor)) notFound();

  const f = flavor as Flavor;
  const smoothies = sortSmoothies(filterSmoothies({ flavor: f }), 'popular');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionStructuredData(
            flavorPageTitles[f],
            flavorIntros[f],
            `/flavor/${f}`
          )),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData([
            { name: 'Home', url: '/' },
            { name: flavorLabels[f], url: `/flavor/${f}` },
          ])),
        }}
      />
      <BrowsePage
        title={flavorPageTitles[f]}
        intro={flavorIntros[f]}
        smoothies={smoothies}
        breadcrumbs={[{ label: 'Flavors' }, { label: flavorLabels[f] }]}
      />
    </>
  );
}
