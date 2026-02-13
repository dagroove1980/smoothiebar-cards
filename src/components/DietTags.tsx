import Link from 'next/link';
import type { Diet } from '@/types/smoothie';
import { dietColors } from '@/lib/colors';
import { dietLabels } from '@/lib/constants';

interface DietTagsProps {
  diets: Diet[];
  linked?: boolean;
  size?: 'sm' | 'md';
}

export default function DietTags({ diets, linked = true, size = 'sm' }: DietTagsProps) {
  const sizeClasses = size === 'sm' ? 'text-[11px] px-2.5 py-0.5' : 'text-xs px-3 py-1';

  return (
    <div className="flex flex-wrap gap-1.5">
      {diets.map((diet) => {
        const colors = dietColors[diet];
        const pill = (
          <span
            key={diet}
            className={`inline-block rounded-full font-medium ${sizeClasses}`}
            style={{ backgroundColor: colors.bg, color: colors.text }}
          >
            {dietLabels[diet]}
          </span>
        );

        if (linked) {
          return (
            <Link key={diet} href={`/diet/${diet}`} className="hover:opacity-80 transition-opacity">
              {pill}
            </Link>
          );
        }
        return pill;
      })}
    </div>
  );
}
