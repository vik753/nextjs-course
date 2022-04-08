import cn from 'classnames';

import styles from './Card.module.css';

import { CardProps } from './Card.props';

const Card = ({
	children,
	color = 'white',
	className,
	...props
}: CardProps) => {
	return (
		<div
			className={cn(styles.card, className, {
				[styles.blue]: color === 'blue',
			})}
			{...props}
		>
			{children}
		</div>
	);
};

export default Card;
