import type { Smoothie } from '@/types/smoothie';
import SmoothieCard from './SmoothieCard';

interface SimilarSmoothiesProps {
  smoothies: Smoothie[];
}

export default function SimilarSmoothies({ smoothies }: SimilarSmoothiesProps) {
  if (smoothies.length === 0) return null;

  return (
    <section>
      <h2 className="font-heading text-xl font-bold text-foreground mb-6">
        You might also like
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {smoothies.map((smoothie) => (
          <SmoothieCard key={smoothie.id} smoothie={smoothie} />
        ))}
      </div>
    </section>
  );
}
