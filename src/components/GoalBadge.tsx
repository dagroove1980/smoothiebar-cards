import type { Goal } from '@/types/smoothie';
import { goalColors } from '@/lib/colors';
import { goalLabels } from '@/lib/constants';

interface GoalBadgeProps {
  goal: Goal;
  size?: 'sm' | 'md';
}

export default function GoalBadge({ goal, size = 'sm' }: GoalBadgeProps) {
  const colors = goalColors[goal];
  const sizeClasses = size === 'sm' ? 'text-[11px] px-2.5 py-0.5' : 'text-xs px-3 py-1';

  return (
    <span
      className={`inline-block rounded-full font-semibold ${sizeClasses}`}
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {goalLabels[goal]}
    </span>
  );
}
