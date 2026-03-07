import type {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	ReactNode,
} from 'react';
import Link from 'next/link';

import { cn } from '@/src/lib/utils/cn';

const baseClassName =
	'inline-flex min-h-11 items-center justify-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold tracking-[0.03em] text-brand-ink shadow-[var(--shadow-soft-inset)] transition duration-[var(--duration-normal)] ease-[var(--ease-standard)] hover:bg-brand-accent hover:text-text-inverted hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
	className?: string;
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	children: ReactNode;
	href: string;
	className?: string;
};

export function Button({ children, className, ...props }: ButtonProps) {
	return (
		<button className={cn(baseClassName, className)} {...props}>
			{children}
		</button>
	);
}

export function LinkButton({
	children,
	href,
	className,
	...props
}: LinkButtonProps) {
	if (href.startsWith('http')) {
		return (
			<a className={cn(baseClassName, className)} href={href} {...props}>
				{children}
			</a>
		);
	}

	return (
		<Link className={cn(baseClassName, className)} href={href} {...props}>
			{children}
		</Link>
	);
}
