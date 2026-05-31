import Script from 'next/script';

import { getPlausibleConfig } from '@/src/lib/analytics/plausible';

export function PlausibleScript() {
	const plausible = getPlausibleConfig();
	if (!plausible) return null;

	return (
		<Script
			defer
			data-domain={plausible.domain}
			src={plausible.src}
			strategy='lazyOnload'
		/>
	);
}
