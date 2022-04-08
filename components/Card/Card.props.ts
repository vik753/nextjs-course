import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: React.ReactNode;
	color?: 'white' | 'blue';
}
