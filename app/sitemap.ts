import type { MetadataRoute } from 'next';

import { getSiteUrl } from '@/src/lib/utils/env';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
	const siteUrl = getSiteUrl();
	const now = new Date();

	return [
		{
			url: `${siteUrl}/`,
			lastModified: now,
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: `${siteUrl}/nosotros`,
			lastModified: now,
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: `${siteUrl}/capacitaciones`,
			lastModified: now,
			changeFrequency: 'weekly',
			priority: 0.95,
		},
		{
			url: `${siteUrl}/galeria`,
			lastModified: now,
			changeFrequency: 'weekly',
			priority: 0.85,
		},
	];
}
