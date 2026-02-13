import { redirect } from 'next/navigation';
import { getRandomSmoothie } from '@/lib/smoothies';

export const dynamic = 'force-dynamic';

export default function RandomPage() {
  const smoothie = getRandomSmoothie();
  redirect(`/recipe/${smoothie.id}`);
}
