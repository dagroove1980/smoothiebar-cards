import type { Nutrition } from '@/types/smoothie';

interface NutritionPanelProps {
  nutrition: Nutrition;
}

const items: { key: keyof Nutrition; label: string; unit: string; color: string }[] = [
  { key: 'calories', label: 'Calories', unit: 'kcal', color: '#F57F17' },
  { key: 'protein', label: 'Protein', unit: 'g', color: '#283593' },
  { key: 'fiber', label: 'Fiber', unit: 'g', color: '#2E7D32' },
  { key: 'sugar', label: 'Sugar', unit: 'g', color: '#C2185B' },
];

export default function NutritionPanel({ nutrition }: NutritionPanelProps) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {items.map(({ key, label, unit, color }) => (
        <div
          key={key}
          className="flex flex-col items-center p-3 rounded-xl"
          style={{ backgroundColor: color + '0A' }}
        >
          <span
            className="nutrition-value text-xl font-semibold"
            style={{ color }}
          >
            {nutrition[key]}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-wide text-secondary mt-0.5">
            {unit}
          </span>
          <span className="text-[11px] text-secondary mt-1">{label}</span>
        </div>
      ))}
    </div>
  );
}
