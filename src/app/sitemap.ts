import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://magheru68.ro',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://magheru68.ro/evenimente',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://magheru68.ro/evenimente/gala-de-excelenta-in-educatie-2025',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://magheru68.ro/doneaza',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }
  ];
}