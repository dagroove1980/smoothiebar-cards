import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Goal } from '@/types/smoothie';
import { filterSmoothies, sortSmoothies } from '@/lib/smoothies';
import { ALL_GOALS, goalLabels, goalPageTitles, goalIntros } from '@/lib/constants';
import { collectionStructuredData, breadcrumbStructuredData } from '@/lib/seo';
import BrowsePage from '@/components/BrowsePage';

interface PageProps {
  params: Promise<{ goal: string }>;
}

export async function generateStaticParams() {
  return ALL_GOALS.map((goal) => ({ goal }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { goal } = await params;
  if (!ALL_GOALS.includes(goal as Goal)) return {};

  const g = goal as Goal;
  return {
    title: goalPageTitles[g],
    description: goalIntros[g].slice(0, 155) + '...',
  };
}

export default async function GoalPage({ params }: PageProps) {
  const { goal } = await params;
  if (!ALL_GOALS.includes(goal as Goal)) notFound();

  const g = goal as Goal;
  const smoothies = sortSmoothies(filterSmoothies({ goal: g }), 'popular');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionStructuredData(
            goalPageTitles[g],
            goalIntros[g],
            `/goal/${g}`
          )),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData([
            { name: 'Home', url: '/' },
            { name: goalLabels[g], url: `/goal/${g}` },
          ])),
        }}
      />
      <BrowsePage
        title={goalPageTitles[g]}
        intro={goalIntros[g]}
        smoothies={smoothies}
        breadcrumbs={[{ label: 'Goals' }, { label: goalLabels[g] }]}
      />
    </>
  );
}
