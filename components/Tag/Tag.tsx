import { TagProps } from './Tag.props';
import cn from 'classnames';
import styles from './Tag.module.css';

const Tag = ({
	children,
	size = 's',
	color = 'ghost',
	href,
	className,
	...props
}: TagProps) => {
	return (
		<div
			className={cn(styles.tag, className, {
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
				[styles.ghost]: color === 'ghost',
				[styles.red]: color === 'red',
				[styles.grey]: color === 'grey',
				[styles.green]: color === 'green',
				[styles.primary]: color === 'primary',
			})}
			{...props}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};

export default Tag;
