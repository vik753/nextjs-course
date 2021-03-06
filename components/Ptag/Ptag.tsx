import cn from 'classnames';

import styles from './Ptag.module.css';

import { PtagProps } from './Ptag.props';

const Ptag = ({ children, size = 'm', className, ...props }: PtagProps) => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.high]: size === 'h',
				[styles.medium]: size === 'm',
				[styles.small]: size === 's',
			})}
			{...props}
		>
			{children}
		</p>
	);
};

export default Ptag;
