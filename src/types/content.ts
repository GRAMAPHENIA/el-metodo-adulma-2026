export type SiteConfig = {
	name: string;
	description: string;
	domain: string;
	locale: string;
	defaultOgImage: string;
};

export type NavItem = {
	label: string;
	href: string;
};

export type LocationCard = {
	id: string;
	location: string;
	scheduleTitle: string;
	schedules: {
		time: string;
		times?: string[];
		venue?: string;
		note?: string;
		address: string;
	}[];
};

export type InstructorProfile = {
	id: string;
	name: string;
	image: string;
	role: string;
};

export type CourseInfo = {
	id: string;
	title: string;
	introText: string;
	secondaryText: string;
	enrollmentNotice: string;
	ctaLabel: string;
	ctaHref: string;
	learnMoreLabel: string;
	learnMoreContent: string[];
};

export type SeoPageConfig = {
	title: string;
	description: string;
	path: string;
	keywords: string[];
};

export type MediaAsset = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	poster?: string;
	fit?: 'cover' | 'contain';
};

export type MethodTextCard = {
	id: string;
	text: string;
};
