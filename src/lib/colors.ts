import type { Goal, Flavor, Diet } from '@/types/smoothie';

export const goalColors: Record<Goal, { bg: string; text: string }> = {
  energy: { bg: '#FFF8E1', text: '#F57F17' },
  protein: { bg: '#E8EAF6', text: '#283593' },
  detox: { bg: '#E8F5E9', text: '#2E7D32' },
  immunity: { bg: '#FFF3E0', text: '#E65100' },
  'weight-loss': { bg: '#FCE4EC', text: '#C2185B' },
  recovery: { bg: '#E0F2F1', text: '#00695C' },
  beauty: { bg: '#F3E5F5', text: '#7B1FA2' },
  calm: { bg: '#E8EAF6', text: '#1565C0' },
};

export const flavorColors: Record<Flavor, { bg: string; text: string }> = {
  green: { bg: '#E8F5E9', text: '#2E7D32' },
  berry: { bg: '#FCE4EC', text: '#AD1457' },
  tropical: { bg: '#FFF8E1', text: '#F57F17' },
  citrus: { bg: '#FFF3E0', text: '#EF6C00' },
  chocolate: { bg: '#EFEBE9', text: '#4E342E' },
  nutty: { bg: '#FFF8E1', text: '#8D6E63' },
  creamy: { bg: '#FFF8E1', text: '#6D4C41' },
  refreshing: { bg: '#E0F7FA', text: '#00838F' },
};

export const dietColors: Record<Diet, { bg: string; text: string }> = {
  vegan: { bg: '#E8F5E9', text: '#2E7D32' },
  keto: { bg: '#FFF3E0', text: '#E65100' },
  'high-protein': { bg: '#E8EAF6', text: '#283593' },
  'low-sugar': { bg: '#E0F2F1', text: '#00695C' },
  'dairy-free': { bg: '#E0F7FA', text: '#00838F' },
  'nut-free': { bg: '#FFF8E1', text: '#F57F17' },
  paleo: { bg: '#EFEBE9', text: '#4E342E' },
  whole30: { bg: '#FCE4EC', text: '#C2185B' },
};

export function hexToRgba(hex: string, opacity: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
