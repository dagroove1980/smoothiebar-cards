import type { Smoothie } from '@/types/smoothie';
import SmoothieCard from './SmoothieCard';
import EmptyState from './EmptyState';

interface SmoothieGridProps {
  smoothies: Smoothie[];
}

export default function SmoothieGrid({ smoothies }: SmoothieGridProps) {
  if (smoothies.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {smoothies.map((smoothie) => (
        <SmoothieCard key={smoothie.id} smoothie={smoothie} />
      ))}
    </div>
  );
}
