import { KeyboardEvent, useEffect, useState } from 'react';
import cn from 'classnames';

import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';

import styles from './Rating.module.css';

const Rating = ({ rating, isEditable, setRating, ...props }: RatingProps) => {
	const [ratingArray, setRaringArray] = useState<JSX.Element[]>(
		new Array(5).fill(<></>)
	);

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedRatingArray = ratingArray.map((r, index) => (
			<span
				className={cn(styles.star, {
					[styles.filled]: index < currentRating,
					[styles.editable]: isEditable,
				})}
				onMouseEnter={() => changeDisplay(index + 1)}
				onMouseLeave={() => changeDisplay(rating)}
				onClick={() => onClickRating(index + 1)}
			>
				<StarIcon
					tabIndex={isEditable ? 0 : -1}
					onKeyDown={(e: KeyboardEvent<SVGElement>) =>
						handleSpace(e, index + 1)
					}
				/>
			</span>
		));
		setRaringArray(updatedRatingArray);
	};

	const changeDisplay = (i: number) => {
		if (!isEditable) return;
		constructRating(i);
	};

	const onClickRating = (i: number) => {
		if (!isEditable || !setRating) return;
		setRating(i);
	};

	const handleSpace = (e: KeyboardEvent<SVGElement>, i: number) => {
		if (!isEditable || !setRating || e.code !== 'Space') return;
		setRating(i);
	};

	return (
		<div {...props}>
			{ratingArray.map((star, id) => (
				<span key={id}>{star}</span>
			))}
		</div>
	);
};

export default Rating;
