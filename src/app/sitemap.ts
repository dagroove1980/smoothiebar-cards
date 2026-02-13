import type { MetadataRoute } from 'next';
import { getAllSmoothies } from '@/lib/smoothies';
import { ALL_GOALS, ALL_FLAVORS, ALL_DIETS } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://smoothiebar.cards';

  const smoothies = getAllSmoothies();

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
  ];

  const goalPages = ALL_GOALS.map((goal) => ({
    url: `${baseUrl}/goal/${goal}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const flavorPages = ALL_FLAVORS.map((flavor) => ({
    url: `${baseUrl}/flavor/${flavor}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const dietPages = ALL_DIETS.map((diet) => ({
    url: `${baseUrl}/diet/${diet}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const recipePages = smoothies.map((s) => ({
    url: `${baseUrl}/recipe/${s.id}`,
    lastModified: new Date(s.createdAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...goalPages, ...flavorPages, ...dietPages, ...recipePages];
}
