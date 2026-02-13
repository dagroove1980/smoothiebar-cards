import type { Smoothie } from '@/types/smoothie';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import SmoothieGrid from './SmoothieGrid';

interface BrowsePageProps {
  title: string;
  intro: string;
  smoothies: Smoothie[];
  breadcrumbs: { label: string; href?: string }[];
}

export default function BrowsePage({ title, intro, smoothies, breadcrumbs }: BrowsePageProps) {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 pt-8 pb-20">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="font-heading text-3xl font-bold text-foreground mb-3">
          {title}
        </h1>
        <p className="text-base text-secondary leading-relaxed max-w-2xl mb-6">
          {intro}
        </p>

        {/* Ad Slot: Filter Page */}
        <div className="mb-8">
          <div data-ad-slot="filter-page" aria-hidden="true" />
        </div>

        <SmoothieGrid smoothies={smoothies} />
      </main>
      <Footer />
    </>
  );
}
