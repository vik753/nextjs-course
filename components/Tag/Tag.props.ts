import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TagProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: React.ReactNode;
	size?: 's' | 'm';
	color?: 'ghost' | 'red' | 'green' | 'grey' | 'primary';
	href?: string;
}
