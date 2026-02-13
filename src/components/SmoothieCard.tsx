import Link from 'next/link';
import type { Smoothie } from '@/types/smoothie';
import HeroIcon from './HeroIcon';
import GoalBadge from './GoalBadge';
import DietTags from './DietTags';

interface SmoothieCardProps {
  smoothie: Smoothie;
}

export default function SmoothieCard({ smoothie }: SmoothieCardProps) {
  return (
    <Link
      href={`/recipe/${smoothie.id}`}
      className="group block bg-card rounded-[var(--radius-card)] border border-border p-5 shadow-card hover:shadow-card-hover transition-shadow"
    >
      {/* Top row: icon + meta */}
      <div className="flex items-start gap-4 mb-3">
        <HeroIcon icon={smoothie.heroIcon} color={smoothie.heroColor} size="card" />
        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-base font-semibold text-foreground leading-tight group-hover:text-accent transition-colors truncate">
            {smoothie.name}
          </h3>
          <p className="text-xs text-secondary mt-0.5 line-clamp-2">
            {smoothie.tagline}
          </p>
        </div>
      </div>

      {/* Badges */}
      <div className="flex items-center gap-2 mb-3">
        <GoalBadge goal={smoothie.goal} />
      </div>

      {/* Diet tags */}
      {smoothie.diet.length > 0 && (
        <div className="mb-3">
          <DietTags diets={smoothie.diet} linked={false} size="sm" />
        </div>
      )}

      {/* Nutrition strip */}
      <div className="flex items-center gap-4 text-[11px] text-secondary pt-3 border-t border-border">
        <span className="nutrition-value font-medium">{smoothie.nutrition.calories} cal</span>
        <span className="nutrition-value font-medium">{smoothie.nutrition.protein}g protein</span>
        <span className="text-tertiary">{smoothie.prepTime}</span>
      </div>
    </Link>
  );
}
