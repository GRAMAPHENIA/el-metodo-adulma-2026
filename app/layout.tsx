import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { PlausibleScript } from '@/src/components/layout/plausible-script';
import { getOrganizationJsonLd, getWebsiteJsonLd } from '@/src/lib/seo/jsonld';
import { siteConfig } from '@/src/lib/seo/site-config';

import './globals.css';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const generalSans = localFont({
	src: '../public/fonts/GeneralSans-Variable.woff2',
	variable: '--font-general-sans',
	display: 'swap',
});

const libreBaskerville = localFont({
	src: '../src/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf',
	variable: '--font-libre-baskerville',
	display: 'swap',
});

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.domain),
	title: {
		default: 'El Método Adulma | Bienestar para adultos mayores',
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	applicationName: siteConfig.name,
	authors: [{ name: 'El Método Adulma' }],
	icons: [{ rel: 'icon', url: '/logoroundedsvg.svg' }],
	formatDetection: {
		telephone: false,
	},
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='es' suppressHydrationWarning className={cn("font-sans", geist.variable)}>
			<body className={`${generalSans.variable} ${libreBaskerville.variable} font-sans`}>
				<PlausibleScript />
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(getOrganizationJsonLd()),
					}}
				/>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(getWebsiteJsonLd()),
					}}
				/>
				{children}
			</body>
		</html>
	);
}
